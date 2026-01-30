'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { ConvertedFile, downloadSingleFile, downloadAsZip } from '@/lib/utils/downloadHelpers';
import { formatFileSize, FORMAT_INFO, OutputFormat } from '@/lib/utils/fileHelpers';

interface DownloadAreaProps {
  files: ConvertedFile[];
  onReset: () => void;
  originalFileName: string;
}

export default function DownloadArea({
  files,
  onReset,
  originalFileName,
}: DownloadAreaProps) {
  const [isDownloadingZip, setIsDownloadingZip] = React.useState(false);

  const handleDownloadAll = async () => {
    setIsDownloadingZip(true);
    try {
      const baseName = originalFileName.replace(/\.pdf$/i, '');
      await downloadAsZip(files, `${baseName}_converted.zip`);
    } finally {
      setIsDownloadingZip(false);
    }
  };

  const getFileIcon = (type: string) => {
    if (type.includes('image')) {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    );
  };

  return (
    <div className="w-full">
      {/* Success Message */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200">
          <svg
            className="w-6 h-6 text-green-600 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-semibold text-green-700">Conversion Complete!</span>
        </div>
      </div>

      {/* File List */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 divide-y divide-slate-200 max-h-[300px] overflow-y-auto">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center min-w-0">
              <div className="p-2 bg-white rounded-lg border border-slate-200 mr-3 text-slate-500">
                {getFileIcon(file.type)}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-slate-700 truncate">{file.name}</p>
                <p className="text-sm text-slate-500">
                  {formatFileSize(file.blob.size)}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => downloadSingleFile(file)}
              className="ml-4 flex-shrink-0"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </Button>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        {files.length > 1 && (
          <Button
            variant="primary"
            size="lg"
            onClick={handleDownloadAll}
            isLoading={isDownloadingZip}
            className="flex-1"
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download All as ZIP
          </Button>
        )}
        <Button variant="secondary" size="lg" onClick={onReset} className="flex-1">
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
          Convert Another File
        </Button>
      </div>
    </div>
  );
}
