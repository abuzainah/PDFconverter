'use client';

import React from 'react';
import { OutputFormat } from '@/lib/utils/fileHelpers';

interface FormatOption {
  format: OutputFormat;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const formatOptions: FormatOption[] = [
  {
    format: 'png',
    title: 'PNG',
    subtitle: 'Best for images with transparency',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    format: 'jpg',
    title: 'JPG',
    subtitle: 'Smaller file size, good for photos',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    format: 'txt',
    title: 'TXT',
    subtitle: 'Extract all text content',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    format: 'docx',
    title: 'DOCX',
    subtitle: 'Editable Word document',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

interface FormatSelectorProps {
  selectedFormat: OutputFormat;
  onFormatChange: (format: OutputFormat) => void;
  disabled?: boolean;
}

export default function FormatSelector({
  selectedFormat,
  onFormatChange,
  disabled = false,
}: FormatSelectorProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700 mb-3">
        Choose output format
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {formatOptions.map((option) => (
          <button
            key={option.format}
            onClick={() => onFormatChange(option.format)}
            disabled={disabled}
            className={`
              p-4 rounded-xl border-2 text-left transition-all duration-200
              ${
                selectedFormat === option.format
                  ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                  : 'border-slate-200 bg-white hover:border-primary-300 hover:bg-slate-50'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <div
              className={`mb-2 ${
                selectedFormat === option.format
                  ? 'text-primary-600'
                  : 'text-slate-500'
              }`}
            >
              {option.icon}
            </div>
            <h3
              className={`font-semibold ${
                selectedFormat === option.format
                  ? 'text-primary-700'
                  : 'text-slate-700'
              }`}
            >
              {option.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">{option.subtitle}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
