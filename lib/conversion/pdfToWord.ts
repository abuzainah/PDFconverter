import * as pdfjsLib from 'pdfjs-dist';
import {
  Document,
  Paragraph,
  TextRun,
  ImageRun,
  Packer,
  PageOrientation,
  AlignmentType,
  HeadingLevel,
  convertInchesToTwip,
} from 'docx';
import { ConvertedFile } from '@/lib/utils/downloadHelpers';
import { generateDownloadFilename } from '@/lib/utils/fileHelpers';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`;

export interface ProgressCallback {
  (progress: number, currentPage: number, totalPages: number): void;
}

interface TextItem {
  str: string;
  x: number;
  y: number;
  width: number;
  fontSize: number;
  fontName: string;
  isBold: boolean;
  isItalic: boolean;
}

interface TextLine {
  items: TextItem[];
  y: number;
  minX: number;
  maxX: number;
  avgFontSize: number;
  isBold: boolean;
  isItalic: boolean;
}

/**
 * Renders PDF page to image for visual-match mode
 */
async function renderPageToImage(page: pdfjsLib.PDFPageProxy): Promise<Uint8Array> {
  const scale = 2.5;
  const viewport = page.getViewport({ scale });
  
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d')!;
  
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  await page.render({ canvasContext: context, viewport }).promise;
  
  const blob = await new Promise<Blob>((resolve) => {
    canvas.toBlob((b) => resolve(b!), 'image/png', 1.0);
  });
  
  return new Uint8Array(await blob.arrayBuffer());
}

/**
 * Extract text with formatting information
 */
async function extractFormattedText(
  page: pdfjsLib.PDFPageProxy,
  docAvgFontSize: number,
  docMaxFontSize: number
): Promise<Paragraph[]> {
  const content = await page.getTextContent();
  const viewport = page.getViewport({ scale: 1 });
  const paragraphs: Paragraph[] = [];

  // Extract text items with full metadata
  const items: TextItem[] = content.items
    .filter((item: any) => 'str' in item && item.str !== '')
    .map((item: any) => {
      const tx = item.transform;
      const fontSize = Math.abs(tx[0]) || Math.abs(tx[3]) || 12;
      const fontName = (item.fontName || '').toLowerCase();

      return {
        str: item.str,
        x: tx[4],
        y: viewport.height - tx[5],
        width: item.width || fontSize * item.str.length * 0.5,
        fontSize,
        fontName,
        isBold: fontName.includes('bold') || fontName.includes('black') || fontName.includes('heavy'),
        isItalic: fontName.includes('italic') || fontName.includes('oblique'),
      };
    });

  // Sort by Y then X
  items.sort((a, b) => {
    const yDiff = a.y - b.y;
    if (Math.abs(yDiff) > Math.min(a.fontSize, b.fontSize) * 0.5) return yDiff;
    return a.x - b.x;
  });

  // Group into lines
  const lines: TextLine[] = [];
  let currentLineItems: TextItem[] = [];
  let currentY = -999;

  for (const item of items) {
    const threshold = item.fontSize * 0.6;

    if (Math.abs(item.y - currentY) > threshold) {
      if (currentLineItems.length > 0) {
        const sorted = [...currentLineItems].sort((a, b) => a.x - b.x);
        const avgFont = sorted.reduce((s, i) => s + i.fontSize, 0) / sorted.length;
        lines.push({
          items: sorted,
          y: currentY,
          minX: Math.min(...sorted.map((i) => i.x)),
          maxX: Math.max(...sorted.map((i) => i.x + i.width)),
          avgFontSize: avgFont,
          isBold: sorted.some((i) => i.isBold),
          isItalic: sorted.some((i) => i.isItalic),
        });
      }
      currentLineItems = [item];
      currentY = item.y;
    } else {
      currentLineItems.push(item);
    }
  }

  // Last line
  if (currentLineItems.length > 0) {
    const sorted = [...currentLineItems].sort((a, b) => a.x - b.x);
    const avgFont = sorted.reduce((s, i) => s + i.fontSize, 0) / sorted.length;
    lines.push({
      items: sorted,
      y: currentY,
      minX: Math.min(...sorted.map((i) => i.x)),
      maxX: Math.max(...sorted.map((i) => i.x + i.width)),
      avgFontSize: avgFont,
      isBold: sorted.some((i) => i.isBold),
      isItalic: sorted.some((i) => i.isItalic),
    });
  }

  // Detect page layout
  const pageLeftMargin = lines.length > 0 ? Math.min(...lines.map((l) => l.minX)) : 0;
  const pageRightMargin = lines.length > 0 ? Math.max(...lines.map((l) => l.maxX)) : viewport.width;
  const pageCenter = (pageLeftMargin + pageRightMargin) / 2;

  // Convert lines to paragraphs
  let prevY = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const gap = prevY > 0 ? line.y - prevY : 0;

    // Detect formatting
    const isHeading = line.avgFontSize > docAvgFontSize * 1.3 || (line.isBold && line.avgFontSize >= docAvgFontSize);
    const isSubheading = line.isBold && line.avgFontSize >= docAvgFontSize && !isHeading;
    const isLargeGap = gap > line.avgFontSize * 1.8;

    // Detect alignment
    const lineCenter = (line.minX + line.maxX) / 2;
    const isCentered = Math.abs(lineCenter - pageCenter) < viewport.width * 0.1;
    const isRightAligned = line.minX > viewport.width * 0.5;

    // Build text runs with formatting
    const textRuns: TextRun[] = [];
    let lastEndX = 0;

    for (const item of line.items) {
      if (lastEndX > 0) {
        const gapX = item.x - lastEndX;
        if (gapX > item.fontSize * 0.3) {
          textRuns.push(new TextRun({ text: ' ' }));
        }
      }

      textRuns.push(
        new TextRun({
          text: item.str,
          bold: item.isBold,
          italics: item.isItalic,
          size: Math.round(item.fontSize * 2),
        })
      );

      lastEndX = item.x + item.width;
    }

    // Determine heading level
    let heading: (typeof HeadingLevel)[keyof typeof HeadingLevel] | undefined;
    if (isHeading && line.avgFontSize >= docMaxFontSize * 0.9) {
      heading = HeadingLevel.HEADING_1;
    } else if (isHeading || isSubheading) {
      heading = HeadingLevel.HEADING_2;
    }

    // Create paragraph
    paragraphs.push(
      new Paragraph({
        children: textRuns,
        heading,
        alignment: isCentered ? AlignmentType.CENTER : isRightAligned ? AlignmentType.RIGHT : AlignmentType.LEFT,
        spacing: {
          before: isLargeGap ? 240 : i === 0 ? 0 : 120,
          after: 60,
          line: 276,
        },
        indent:
          line.minX > pageLeftMargin + 20
            ? { left: convertInchesToTwip((line.minX - pageLeftMargin) / 72) }
            : undefined,
      })
    );

    prevY = line.y;
  }

  return paragraphs;
}

/**
 * PDF to Word - Creates BOTH visual and editable versions
 */
export async function pdfToWord(file: File, onProgress?: ProgressCallback): Promise<ConvertedFile[]> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({
      data: arrayBuffer,
      cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/cmaps/',
      cMapPacked: true,
      standardFontDataUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/standard_fonts/',
    }).promise;

    const totalPages = pdf.numPages;
    const results: ConvertedFile[] = [];

    // First pass: collect font statistics
    let docMaxFontSize = 0;
    let docAvgFontSize = 0;
    let totalFontSizeSum = 0;
    let totalItemCount = 0;

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();

      for (const item of content.items) {
        if ('str' in item && (item as any).str.trim()) {
          const fontSize = Math.abs((item as any).transform[0]) || Math.abs((item as any).transform[3]) || 12;
          docMaxFontSize = Math.max(docMaxFontSize, fontSize);
          totalFontSizeSum += fontSize;
          totalItemCount++;
        }
      }
      page.cleanup();
    }

    docAvgFontSize = totalItemCount > 0 ? totalFontSizeSum / totalItemCount : 12;

    // ============================================
    // VERSION 1: VISUAL MATCH (Image-based)
    // ============================================
    const imageSections: any[] = [];

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1 });
      const isLandscape = viewport.width > viewport.height;

      const imageData = await renderPageToImage(page);

      const pageW = 8.5,
        pageH = 11,
        margin = 0.5;
      const contentW = pageW - margin * 2;
      const contentH = pageH - margin * 2;
      const aspect = viewport.width / viewport.height;

      let imgW = contentW,
        imgH = imgW / aspect;
      if (imgH > contentH) {
        imgH = contentH;
        imgW = imgH * aspect;
      }

      imageSections.push({
        properties: {
          page: {
            size: {
              orientation: isLandscape ? PageOrientation.LANDSCAPE : PageOrientation.PORTRAIT,
            },
            margin: {
              top: convertInchesToTwip(margin),
              right: convertInchesToTwip(margin),
              bottom: convertInchesToTwip(margin),
              left: convertInchesToTwip(margin),
            },
          },
        },
        children: [
          new Paragraph({
            children: [
              new ImageRun({
                data: imageData,
                transformation: { width: imgW * 96, height: imgH * 96 },
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        ],
      });

      page.cleanup();
      onProgress?.(Math.round((pageNum / totalPages) * 50), pageNum, totalPages);
    }

    const visualDoc = new Document({
      creator: 'PDF Quick Convert',
      title: file.name.replace(/\.pdf$/i, '') + ' (Visual)',
      sections: imageSections,
    });

    const visualBlob = await Packer.toBlob(visualDoc);
    results.push({
      name: file.name.replace(/\.pdf$/i, '') + '_VISUAL.docx',
      blob: visualBlob,
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    // ============================================
    // VERSION 2: EDITABLE with formatting
    // ============================================
    const allParagraphs: Paragraph[] = [];

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const pageParagraphs = await extractFormattedText(page, docAvgFontSize, docMaxFontSize);

      // Add page break between pages
      if (pageNum > 1 && pageParagraphs.length > 0) {
        allParagraphs.push(
          new Paragraph({
            children: [],
            pageBreakBefore: true,
          })
        );
      }

      allParagraphs.push(...pageParagraphs);

      page.cleanup();
      onProgress?.(50 + Math.round((pageNum / totalPages) * 50), pageNum, totalPages);
    }

    const editableDoc = new Document({
      creator: 'PDF Quick Convert',
      title: file.name.replace(/\.pdf$/i, '') + ' (Editable)',
      styles: {
        default: {
          document: {
            run: { font: 'Calibri', size: 24 },
          },
          heading1: {
            run: { font: 'Calibri', size: 32, bold: true, color: '2E74B5' },
            paragraph: { spacing: { before: 240, after: 120 } },
          },
          heading2: {
            run: { font: 'Calibri', size: 26, bold: true, color: '2E74B5' },
            paragraph: { spacing: { before: 200, after: 100 } },
          },
        },
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: convertInchesToTwip(0.75),
                right: convertInchesToTwip(0.75),
                bottom: convertInchesToTwip(0.75),
                left: convertInchesToTwip(0.75),
              },
            },
          },
          children: allParagraphs,
        },
      ],
    });

    const editableBlob = await Packer.toBlob(editableDoc);
    results.push({
      name: file.name.replace(/\.pdf$/i, '') + '_EDITABLE.docx',
      blob: editableBlob,
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    return results;
  } catch (error) {
    if (error instanceof Error && error.message.includes('password')) {
      throw new Error('This PDF is password protected.');
    }
    throw error;
  }
}
