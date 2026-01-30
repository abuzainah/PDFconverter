'use client';

import React, { useState, useCallback } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import UploadZone from './UploadZone';
import FormatSelector from './FormatSelector';
import ConversionProgress from './ConversionProgress';
import DownloadArea from './DownloadArea';
import { OutputFormat, formatFileSize } from '@/lib/utils/fileHelpers';
import { ConvertedFile } from '@/lib/utils/downloadHelpers';
import { pdfToImages } from '@/lib/conversion/pdfToImages';
import { pdfToText } from '@/lib/conversion/pdfToText';
import { pdfToWord } from '@/lib/conversion/pdfToWord';

interface ConverterToolProps {
  defaultFormat?: OutputFormat;
  hideFormatSelector?: boolean;
}

type ConversionState = 'idle' | 'ready' | 'converting' | 'complete' | 'error';

export default function ConverterTool({
  defaultFormat,
  hideFormatSelector = false,
}: ConverterToolProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<OutputFormat>(
    defaultFormat || 'png'
  );
  const [conversionState, setConversionState] = useState<ConversionState>('idle');
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = useCallback((file: File) => {
    setSelectedFile(file);
    setConversionState('ready');
    setError(null);
  }, []);

  const handleFormatChange = useCallback((format: OutputFormat) => {
    setSelectedFormat(format);
  }, []);

  const handleProgress = useCallback(
    (prog: number, current: number, total: number) => {
      setProgress(prog);
      setCurrentPage(current);
      setTotalPages(total);
    },
    []
  );

  const handleConvert = useCallback(async () => {
    if (!selectedFile) return;

    setConversionState('converting');
    setProgress(0);
    setCurrentPage(0);
    setTotalPages(0);
    setError(null);

    try {
      let files: ConvertedFile[];

      switch (selectedFormat) {
        case 'png':
          files = await pdfToImages(selectedFile, 'png', handleProgress);
          break;
        case 'jpg':
          files = await pdfToImages(selectedFile, 'jpg', handleProgress);
          break;
        case 'txt':
          files = await pdfToText(selectedFile, handleProgress);
          break;
        case 'docx':
          files = await pdfToWord(selectedFile, handleProgress);
          break;
        default:
          throw new Error('Unsupported format');
      }

      setConvertedFiles(files);
      setConversionState('complete');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      setConversionState('error');
    }
  }, [selectedFile, selectedFormat, handleProgress]);

  const handleReset = useCallback(() => {
    setSelectedFile(null);
    setConversionState('idle');
    setProgress(0);
    setCurrentPage(0);
    setTotalPages(0);
    setConvertedFiles([]);
    setError(null);
  }, []);

  const handleRemoveFile = useCallback(() => {
    setSelectedFile(null);
    setConversionState('idle');
    setError(null);
  }, []);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      {/* Idle or Ready State */}
      {(conversionState === 'idle' || conversionState === 'ready') && (
        <div className="space-y-6">
          {/* Upload Zone or File Info */}
          {!selectedFile ? (
            <UploadZone onFileSelect={handleFileSelect} />
          ) : (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center min-w-0">
                  <div className="p-3 bg-primary-100 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-700 truncate">
                      {selectedFile.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {formatFileSize(selectedFile.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Remove file"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Format Selector */}
          {!hideFormatSelector && (
            <FormatSelector
              selectedFormat={selectedFormat}
              onFormatChange={handleFormatChange}
              disabled={false}
            />
          )}

          {/* Convert Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={handleConvert}
            disabled={!selectedFile}
            className="w-full"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Convert to {selectedFormat.toUpperCase()}
          </Button>
        </div>
      )}

      {/* Converting State */}
      {conversionState === 'converting' && (
        <ConversionProgress
          progress={progress}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}

      {/* Complete State */}
      {conversionState === 'complete' && selectedFile && (
        <DownloadArea
          files={convertedFiles}
          onReset={handleReset}
          originalFileName={selectedFile.name}
        />
      )}

      {/* Error State */}
      {conversionState === 'error' && (
        <div className="space-y-6">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-red-700">Conversion Failed</h3>
                <p className="text-sm text-red-600 mt-1">{error}</p>
              </div>
            </div>
          </div>
          <Button variant="primary" size="lg" onClick={handleReset} className="w-full">
            Try Again
          </Button>
        </div>
      )}
    </Card>
  );
}
