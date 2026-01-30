'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import ConverterTool from '@/components/converter/ConverterTool';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/link';

export default function PdfToPngPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the quality of the PNG output?',
      answer:
        'Our converter produces high-quality PNG images at 2x scale (retina quality). This means a standard letter-size page will produce an approximately 1700 x 2200 pixel image, ensuring crisp and clear results for any use case.',
    },
    {
      question: 'Does PNG conversion preserve transparency?',
      answer:
        'Yes! PNG format supports transparency, so if your PDF has transparent backgrounds or elements, they will be preserved in the output images.',
    },
    {
      question: 'How many pages can I convert to PNG?',
      answer:
        'There is no strict page limit. Each page of your PDF becomes a separate PNG image. You can download them individually or as a ZIP archive for convenience.',
    },
    {
      question: 'Why should I choose PNG over JPG?',
      answer:
        'Choose PNG when you need the highest quality output, when your document contains graphics, logos, or text that needs to be crisp, or when you need transparency support. JPG is better when file size is a priority.',
    },
    {
      question: 'Can I convert scanned PDFs to PNG?',
      answer:
        'Yes, you can convert any PDF to PNG images, including scanned documents. The conversion renders each page as an image exactly as it appears in the PDF.',
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: 'Lossless Quality',
      description: 'PNG compression preserves every detail without quality loss',
    },
    {
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
      title: 'Transparency Support',
      description: 'Preserves transparent backgrounds and elements',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'High Resolution',
      description: '2x scale output for crisp, clear images',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: 'Batch Download',
      description: 'Download all pages as a ZIP archive',
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Convert PDF to PNG
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Transform your PDF pages into high-quality PNG images with transparency
            support. Free, secure, and instant—all processing happens in your browser.
          </p>
          <div className="mb-8">
            <AdBanner slot="top" size="leaderboard" />
          </div>
        </section>

        {/* Converter Tool */}
        <section className="mb-12">
          <ConverterTool defaultFormat="png" hideFormatSelector />
        </section>

        {/* Middle Ad */}
        <section className="mb-12 flex justify-center">
          <AdBanner slot="middle" size="rectangle" />
        </section>

        {/* Why Convert */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Why Convert PDF to PNG?
            </h2>
            <p className="text-slate-600 mb-4">
              PNG (Portable Network Graphics) is an ideal format for converting PDF
              pages when you need high-quality images without any loss of detail.
              Unlike JPG, PNG uses lossless compression, meaning every pixel of your
              document is preserved exactly as it appears in the original.
            </p>
            <p className="text-slate-600 mb-4">
              PNG conversion is perfect for:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Presentations and slideshows where quality matters</li>
              <li>Documents with logos, graphics, or sharp text</li>
              <li>Images that need transparency (transparent backgrounds)</li>
              <li>Social media posts and web graphics</li>
              <li>Print materials where clarity is essential</li>
            </ul>
            <p className="text-slate-600">
              Our converter produces PNG images at 2x scale (retina quality),
              ensuring your converted pages look crisp on any screen, including
              high-resolution displays.
            </p>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            PNG Conversion Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <div className="text-primary-600 mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* How To */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto bg-primary-50 border-primary-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              How to Convert PDF to PNG
            </h2>
            <ol className="list-decimal list-inside text-slate-600 space-y-3">
              <li>
                <strong>Upload your PDF</strong> - Drag and drop your file or click
                to browse (max 20MB)
              </li>
              <li>
                <strong>Wait for conversion</strong> - Each page is converted to a
                high-quality PNG image
              </li>
              <li>
                <strong>Download your images</strong> - Get individual files or download
                all as a ZIP archive
              </li>
            </ol>
            <p className="text-slate-600 mt-4 text-sm">
              Tip: For best results, use PDFs with clear, high-resolution content.
              The output quality depends on the quality of your original PDF.
            </p>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            PDF to PNG FAQ
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-medium text-slate-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Conversions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">
            Other Conversion Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link href="/pdf-to-jpg">
              <Card hover className="text-center">
                <h3 className="font-semibold text-primary-600">PDF to JPG</h3>
                <p className="text-sm text-slate-600">Smaller file sizes</p>
              </Card>
            </Link>
            <Link href="/pdf-to-text">
              <Card hover className="text-center">
                <h3 className="font-semibold text-primary-600">PDF to Text</h3>
                <p className="text-sm text-slate-600">Extract text content</p>
              </Card>
            </Link>
            <Link href="/pdf-to-word">
              <Card hover className="text-center">
                <h3 className="font-semibold text-primary-600">PDF to Word</h3>
                <p className="text-sm text-slate-600">Editable documents</p>
              </Card>
            </Link>
          </div>
        </section>

        {/* Bottom Ad */}
        <section className="flex justify-center">
          <AdBanner slot="bottom" size="leaderboard" />
        </section>
      </Container>
    </div>
  );
}
