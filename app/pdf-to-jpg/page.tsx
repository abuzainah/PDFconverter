'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import ConverterTool from '@/components/converter/ConverterTool';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/link';

export default function PdfToJpgPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the quality of JPG output?',
      answer:
        'Our converter uses 92% quality compression, which provides an excellent balance between image quality and file size. The images are rendered at 2x scale for high resolution output.',
    },
    {
      question: 'Why are JPG files smaller than PNG?',
      answer:
        'JPG uses lossy compression, which discards some image data that the human eye typically cannot perceive. This results in significantly smaller file sizes compared to lossless PNG, while maintaining good visual quality.',
    },
    {
      question: 'When should I choose JPG over PNG?',
      answer:
        'Choose JPG when file size is important, when sharing images online or via email, when the document contains photographs, or when transparency is not needed. JPG is ideal for web use and social media.',
    },
    {
      question: 'Does JPG support transparency?',
      answer:
        'No, JPG format does not support transparency. Any transparent areas in your PDF will be converted to white in the JPG output. If you need transparency, use PNG conversion instead.',
    },
    {
      question: 'How many pages can I convert to JPG?',
      answer:
        'There is no strict page limit. Each page of your PDF becomes a separate JPG image. You can download them individually or as a convenient ZIP archive.',
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: 'Smaller File Size',
      description: 'Efficient compression for compact images',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: 'Universal Format',
      description: 'Works everywhere, compatible with all devices',
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
      title: 'Photo Optimized',
      description: 'Best for documents with photographs',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      ),
      title: 'Easy Sharing',
      description: 'Perfect for email and social media',
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Convert PDF to JPG
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Transform your PDF pages into compressed JPG images for easy sharing.
            Smaller file sizes, universal compatibility—all processed securely in
            your browser.
          </p>
          <div className="mb-8">
            <AdBanner slot="top" size="leaderboard" />
          </div>
        </section>

        {/* Converter Tool */}
        <section className="mb-12">
          <ConverterTool defaultFormat="jpg" hideFormatSelector />
        </section>

        {/* Middle Ad */}
        <section className="mb-12 flex justify-center">
          <AdBanner slot="middle" size="rectangle" />
        </section>

        {/* Why Convert */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Why Convert PDF to JPG?
            </h2>
            <p className="text-slate-600 mb-4">
              JPG (also known as JPEG) is the most widely used image format on the
              web. It uses smart compression to create smaller file sizes while
              maintaining good visual quality, making it perfect for sharing documents
              online or via email.
            </p>
            <p className="text-slate-600 mb-4">
              JPG conversion is ideal for:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Sharing document images via email (smaller attachments)</li>
              <li>Posting on social media platforms</li>
              <li>Web uploads where file size matters</li>
              <li>Documents containing photographs</li>
              <li>Quick previews and thumbnails</li>
              <li>Storage when space is limited</li>
            </ul>
            <p className="text-slate-600">
              Our converter uses high-quality 92% compression, giving you the best
              balance between visual quality and file size reduction.
            </p>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            JPG Conversion Features
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
              How to Convert PDF to JPG
            </h2>
            <ol className="list-decimal list-inside text-slate-600 space-y-3">
              <li>
                <strong>Upload your PDF</strong> - Drag and drop your file or click
                to browse (max 20MB)
              </li>
              <li>
                <strong>Automatic conversion</strong> - Each page is converted to a
                compressed JPG image
              </li>
              <li>
                <strong>Download your images</strong> - Get individual files or download
                all as a ZIP archive
              </li>
            </ol>
            <p className="text-slate-600 mt-4 text-sm">
              Tip: JPG is best for photographs and images with gradients. For
              documents with text and sharp graphics, consider PNG for higher quality.
            </p>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            PDF to JPG FAQ
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
            <Link href="/pdf-to-png">
              <Card hover className="text-center">
                <h3 className="font-semibold text-primary-600">PDF to PNG</h3>
                <p className="text-sm text-slate-600">Lossless quality</p>
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
