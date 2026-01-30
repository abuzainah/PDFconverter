/**
 * Maximum allowed file size in bytes (20MB)
 */
export const MAX_FILE_SIZE = 20 * 1024 * 1024;

/**
 * Allowed MIME types for PDF files
 */
export const ALLOWED_MIME_TYPES = ['application/pdf'];

/**
 * Validates if a file is a valid PDF
 */
export function validatePdfFile(file: File): { valid: boolean; error?: string } {
  // Check if file exists
  if (!file) {
    return { valid: false, error: 'No file selected' };
  }

  // Check MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return { valid: false, error: 'Please select a valid PDF file' };
  }

  // Check file extension as backup
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (extension !== 'pdf') {
    return { valid: false, error: 'Please select a valid PDF file' };
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds ${formatFileSize(MAX_FILE_SIZE)}. Please select a smaller file.`,
    };
  }

  return { valid: true };
}

/**
 * Formats file size to human-readable string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Gets the file extension from a filename
 */
export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

/**
 * Generates a download filename based on original name and new extension
 */
export function generateDownloadFilename(
  originalName: string,
  newExtension: string,
  pageNumber?: number
): string {
  const baseName = originalName.replace(/\.pdf$/i, '');
  const pageSuffix = pageNumber !== undefined ? `_page${pageNumber + 1}` : '';
  return `${baseName}${pageSuffix}.${newExtension}`;
}

/**
 * Supported output formats
 */
export type OutputFormat = 'png' | 'jpg' | 'txt' | 'docx';

/**
 * Format information
 */
export const FORMAT_INFO: Record<
  OutputFormat,
  { label: string; mimeType: string; extension: string }
> = {
  png: { label: 'PNG Image', mimeType: 'image/png', extension: 'png' },
  jpg: { label: 'JPG Image', mimeType: 'image/jpeg', extension: 'jpg' },
  txt: { label: 'Text File', mimeType: 'text/plain', extension: 'txt' },
  docx: {
    label: 'Word Document',
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    extension: 'docx',
  },
};
