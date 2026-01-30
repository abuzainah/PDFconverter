'use client';

import React from 'react';

interface AdBannerProps {
  slot: 'top' | 'middle' | 'bottom' | 'sidebar';
  size: 'leaderboard' | 'rectangle' | 'skyscraper';
  className?: string;
}

export default function AdBanner({ slot, size, className = '' }: AdBannerProps) {
  const sizeStyles = {
    leaderboard: 'w-full max-w-[728px] h-[90px] md:h-[90px] sm:max-w-[320px] sm:h-[100px]',
    rectangle: 'w-[300px] h-[250px]',
    skyscraper: 'w-[160px] h-[600px]',
  };

  return (
    <div
      className={`mx-auto bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center ${sizeStyles[size]} ${className}`}
      data-ad-slot={slot}
      data-ad-size={size}
    >
      <span className="text-slate-400 text-sm">Advertisement</span>
      {/* 
        After Google AdSense approval, replace this placeholder with actual ad code:
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      */}
    </div>
  );
}
