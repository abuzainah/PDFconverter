import * as pdfjsLib from 'pdfjs-dist';
import { ConvertedFile } from '@/lib/utils/downloadHelpers';
import { generateDownloadFilename } from '@/lib/utils/fileHelpers';

// Configure PDF.js worker from CDN
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`;

export type ImageFormat = 'png' | 'jpg';

export interface ProgressCallback {
  (progress: number, currentPage: number, totalPages: number): void;
}

/**
 * Renders a PDF page to a canvas with maximum quality
 */
export async function renderPageToCanvas(
  page: pdfjsLib.PDFPageProxy,
  scale: number = 4
): Promise<HTMLCanvasElement> {
  const viewport = page.getViewport({ scale });
  
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', {
    alpha: true,
    willReadFrequently: false,
  });

  if (!context) {
    throw new Error('Failed to get canvas context');
  }

  // Use device pixel ratio for sharper rendering on high-DPI displays
  const outputScale = window.devicePixelRatio || 1;
  
  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);
  canvas.style.width = Math.floor(viewport.width) + 'px';
  canvas.style.height = Math.floor(viewport.height) + 'px';

  const transform = outputScale !== 1 
    ? [outputScale, 0, 0, outputScale, 0, 0] 
    : undefined;

  // Maximum quality rendering settings
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = 'high';

  const renderContext = {
    canvasContext: context,
    viewport: viewport,
    transform: transform,
    background: 'white',
  };

  await page.render(renderContext).promise;
  
  return canvas;
}

/**
 * Converts PDF pages to images (PNG or JPG) with MAXIMUM QUALITY
 */
export async function pdfToImages(
  file: File,
  format: ImageFormat = 'png',
  onProgress?: ProgressCallback,
  scale: number = 4 // 4x scale for maximum quality
): Promise<ConvertedFile[]> {
  const convertedFiles: ConvertedFile[] = [];

  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ 
      data: arrayBuffer,
      cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/cmaps/',
      cMapPacked: true,
      standardFontDataUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/standard_fonts/',
      useSystemFonts: true,
      enableXfa: true,
    }).promise;
    
    const totalPages = pdf.numPages;

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const canvas = await renderPageToCanvas(page, scale);
      const context = canvas.getContext('2d');

      // For JPG, fill white background (no transparency)
      if (format === 'jpg' && context) {
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Replace transparent pixels with white
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] < 255) {
            const alpha = data[i + 3] / 255;
            data[i] = Math.round(data[i] * alpha + 255 * (1 - alpha));
            data[i + 1] = Math.round(data[i + 1] * alpha + 255 * (1 - alpha));
            data[i + 2] = Math.round(data[i + 2] * alpha + 255 * (1 - alpha));
            data[i + 3] = 255;
          }
        }
        context.putImageData(imageData, 0, 0);
      }

      const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
      const quality = format === 'jpg' ? 0.98 : undefined; // 98% quality for JPG

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to convert canvas to blob'));
            }
          },
          mimeType,
          quality
        );
      });

      const fileName = generateDownloadFilename(file.name, format, pageNum - 1);
      convertedFiles.push({
        name: fileName,
        blob,
        type: mimeType,
      });

      const progress = Math.round((pageNum / totalPages) * 100);
      onProgress?.(progress, pageNum, totalPages);

      page.cleanup();
    }

    return convertedFiles;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('password')) {
        throw new Error('This PDF is password protected. Please remove the password and try again.');
      }
      if (error.message.includes('Invalid PDF')) {
        throw new Error('This file appears to be corrupted or is not a valid PDF.');
      }
    }
    throw error;
  }
}
