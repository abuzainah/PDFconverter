'use client';

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { validatePdfFile, formatFileSize, MAX_FILE_SIZE } from '@/lib/utils/fileHelpers';

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  maxSize?: number;
  disabled?: boolean;
}

export default function UploadZone({
  onFileSelect,
  maxSize = MAX_FILE_SIZE,
  disabled = false,
}: UploadZoneProps) {
  const [error, setError] = React.useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null);

      if (acceptedFiles.length === 0) {
        return;
      }

      const file = acceptedFiles[0];
      const validation = validatePdfFile(file);

      if (!validation.valid) {
        setError(validation.error || 'Invalid file');
        return;
      }

      onFileSelect(file);
    },
    [onFileSelect]
  );

  const onDropRejected = useCallback(() => {
    setError('Please select a valid PDF file (max 20MB)');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxSize,
    multiple: false,
    disabled,
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
          min-h-[200px] border-2 border-dashed rounded-xl p-8
          flex flex-col items-center justify-center cursor-pointer
          transition-all duration-200
          ${
            isDragActive
              ? 'border-primary-500 bg-primary-50'
              : 'border-slate-300 bg-slate-50 hover:border-primary-400 hover:bg-slate-100'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input {...getInputProps()} />

        {/* Upload Icon */}
        <div
          className={`mb-4 p-4 rounded-full ${
            isDragActive ? 'bg-primary-100' : 'bg-slate-200'
          }`}
        >
          <svg
            className={`w-8 h-8 ${
              isDragActive ? 'text-primary-600' : 'text-slate-500'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>

        {/* Text */}
        <p className="text-lg font-medium text-slate-700 mb-1">
          {isDragActive ? 'Drop your PDF here' : 'Drag & drop your PDF here'}
        </p>
        <p className="text-sm text-slate-500">
          or click to browse (max {formatFileSize(maxSize)})
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600 flex items-center">
            <svg
              className="w-4 h-4 mr-2 flex-shrink-0"
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
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
