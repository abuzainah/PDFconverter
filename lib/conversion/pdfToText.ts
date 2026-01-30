import * as pdfjsLib from 'pdfjs-dist';
import { ConvertedFile } from '@/lib/utils/downloadHelpers';
import { generateDownloadFilename } from '@/lib/utils/fileHelpers';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`;

export interface ProgressCallback {
  (progress: number, currentPage: number, totalPages: number): void;
}

interface ExtractedItem {
  str: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize: number;
}

/**
 * Extracts text from PDF preserving layout as much as possible
 */
export async function pdfToText(
  file: File,
  onProgress?: ProgressCallback
): Promise<ConvertedFile[]> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ 
      data: arrayBuffer,
      cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/cmaps/',
      cMapPacked: true,
      standardFontDataUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/standard_fonts/',
    }).promise;
    
    const totalPages = pdf.numPages;
    const allPagesText: string[] = [];

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const viewport = page.getViewport({ scale: 1 });
      
      // Extract items with position
      const items: ExtractedItem[] = content.items
        .filter((item: any) => 'str' in item && item.str !== '')
        .map((item: any) => {
          const tx = item.transform;
          return {
            str: item.str,
            x: Math.round(tx[4]),
            y: Math.round(viewport.height - tx[5]),
            width: item.width || 0,
            height: Math.abs(tx[0]) || Math.abs(tx[3]) || 12,
            fontSize: Math.abs(tx[0]) || Math.abs(tx[3]) || 12,
          };
        });

      // Sort by Y then X
      items.sort((a, b) => {
        const yDiff = a.y - b.y;
        if (Math.abs(yDiff) > 3) return yDiff;
        return a.x - b.x;
      });

      // Group into lines
      const lines: ExtractedItem[][] = [];
      let currentLine: ExtractedItem[] = [];
      let lastY = -999;

      for (const item of items) {
        if (Math.abs(item.y - lastY) > item.fontSize * 0.7) {
          if (currentLine.length > 0) {
            lines.push([...currentLine]);
          }
          currentLine = [item];
          lastY = item.y;
        } else {
          currentLine.push(item);
        }
      }
      if (currentLine.length > 0) {
        lines.push(currentLine);
      }

      // Build text with layout preservation
      let pageText = '';
      let prevLineY = 0;
      const pageWidth = viewport.width;

      for (const line of lines) {
        // Sort line items by X
        line.sort((a, b) => a.x - b.x);
        
        // Detect paragraph breaks (larger vertical gap)
        const lineY = line[0]?.y || 0;
        const avgFontSize = line.reduce((s, i) => s + i.fontSize, 0) / line.length;
        
        if (prevLineY > 0 && lineY - prevLineY > avgFontSize * 2) {
          pageText += '\n'; // Extra line for paragraph break
        }

        // Build line with spacing
        let lineText = '';
        let lastEndX = 0;

        for (const item of line) {
          // Calculate spaces needed based on X position gap
          if (lastEndX > 0) {
            const gap = item.x - lastEndX;
            if (gap > avgFontSize * 2) {
              // Large gap - might be columns, use tab
              lineText += '\t';
            } else if (gap > avgFontSize * 0.3) {
              // Normal word gap
              lineText += ' ';
            }
          }
          lineText += item.str;
          lastEndX = item.x + item.width;
        }

        pageText += lineText.trimEnd() + '\n';
        prevLineY = lineY;
      }

      // Add page header for multi-page
      if (totalPages > 1) {
        allPagesText.push(`\n${'─'.repeat(60)}\n  PAGE ${pageNum} of ${totalPages}\n${'─'.repeat(60)}\n\n${pageText.trim()}`);
      } else {
        allPagesText.push(pageText.trim());
      }

      const progress = Math.round((pageNum / totalPages) * 100);
      onProgress?.(progress, pageNum, totalPages);
      page.cleanup();
    }

    const fullText = allPagesText.join('\n\n');

    if (!fullText.trim()) {
      throw new Error('No text could be extracted. This may be a scanned document or image-based PDF.');
    }

    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const fileName = generateDownloadFilename(file.name, 'txt');

    return [{
      name: fileName,
      blob,
      type: 'text/plain',
    }];
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('password')) {
        throw new Error('This PDF is password protected.');
      }
    }
    throw error;
  }
}
