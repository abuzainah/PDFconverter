'use client';

import React from 'react';
import Script from 'next/script';

interface AdSenseScriptProps {
  publisherId?: string;
}

export default function AdSenseScript({ publisherId }: AdSenseScriptProps) {
  // Don't render if no publisher ID is provided
  if (!publisherId) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

/*
  Usage:
  After AdSense approval, add to your layout.tsx:
  
  import AdSenseScript from '@/components/ads/AdSenseScript';
  
  In the head or body:
  <AdSenseScript publisherId="ca-pub-XXXXXXXXXXXXXXXX" />
*/
