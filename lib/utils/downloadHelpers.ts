import { saveAs } from 'file-saver';
import JSZip from 'jszip';

/**
 * Represents a converted file ready for download
 */
export interface ConvertedFile {
  name: string;
  blob: Blob;
  type: string;
}

/**
 * Downloads a single file
 */
export function downloadSingleFile(file: ConvertedFile): void {
  saveAs(file.blob, file.name);
}

/**
 * Downloads multiple files as a ZIP archive
 */
export async function downloadAsZip(
  files: ConvertedFile[],
  zipName: string = 'converted_files.zip'
): Promise<void> {
  const zip = new JSZip();

  // Add each file to the ZIP
  files.forEach((file) => {
    zip.file(file.name, file.blob);
  });

  // Generate the ZIP file
  const zipBlob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  // Trigger download
  saveAs(zipBlob, zipName);
}

/**
 * Downloads files - uses ZIP for multiple files, direct download for single file
 */
export async function downloadFiles(
  files: ConvertedFile[],
  originalFileName: string
): Promise<void> {
  if (files.length === 0) {
    throw new Error('No files to download');
  }

  if (files.length === 1) {
    downloadSingleFile(files[0]);
  } else {
    const baseName = originalFileName.replace(/\.pdf$/i, '');
    await downloadAsZip(files, `${baseName}_converted.zip`);
  }
}
