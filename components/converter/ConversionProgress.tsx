'use client';

import React from 'react';
import Button from '@/components/ui/Button';

interface ConversionProgressProps {
  progress: number;
  currentPage: number;
  totalPages: number;
  onCancel?: () => void;
}

export default function ConversionProgress({
  progress,
  currentPage,
  totalPages,
  onCancel,
}: ConversionProgressProps) {
  return (
    <div className="w-full p-6 bg-slate-50 rounded-xl border border-slate-200">
      {/* Progress Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="animate-spin mr-3">
            <svg
              className="w-5 h-5 text-primary-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <span className="font-medium text-slate-700">
            Converting page {currentPage} of {totalPages}...
          </span>
        </div>
        <span className="text-lg font-semibold text-primary-600">{progress}%</span>
      </div>

      {/* Progress Bar */}
      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-600 rounded-full transition-all duration-300 ease-out animate-progress-pulse"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Status Text */}
      <p className="mt-3 text-sm text-slate-500 text-center">
        Please wait while we convert your PDF...
      </p>

      {/* Cancel Button */}
      {onCancel && (
        <div className="mt-4 text-center">
          <Button variant="ghost" size="sm" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}
