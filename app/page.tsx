'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import ConverterTool from '@/components/converter/ConverterTool';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/link';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this PDF converter really free?',
      answer:
        'Yes, completely free. We support the service through advertisements, allowing us to provide this tool at no cost to you.',
    },
    {
      question: 'Are my files secure?',
      answer:
        'Yes, all processing happens in your browser. Your files never leave your device and are never uploaded to any server. This ensures complete privacy and security.',
    },
    {
      question: "What's the maximum file size?",
      answer:
        'You can convert PDFs up to 20MB. This limit ensures smooth performance in your browser while handling most document sizes.',
    },
    {
      question: 'Do I need to create an account?',
      answer:
        'No, you can start converting immediately without any registration or account creation. Just upload your PDF and convert.',
    },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: '100% Secure',
      description:
        'Files are processed in your browser, never uploaded anywhere. Your documents stay private.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Lightning Fast',
      description:
        'Convert PDFs in seconds using modern browser technology. No waiting for uploads or downloads.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: 'No Signup Required',
      description:
        'Start immediately without creating an account. No email, no password, just convert.',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Multiple Formats',
      description:
        'Export to PNG, JPG, Text, or Word documents. Choose the format that works best for you.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Upload Your PDF',
      description: 'Drag and drop or click to select (up to 20MB)',
    },
    {
      number: '2',
      title: 'Choose Your Format',
      description: 'Select PNG, JPG, TXT, or DOCX',
    },
    {
      number: '3',
      title: 'Download Instantly',
      description: 'Your converted file is ready immediately',
    },
  ];

  const conversionLinks = [
    {
      href: '/pdf-to-png',
      title: 'PDF to PNG',
      description: 'Convert PDF pages to high-quality PNG images with transparency support',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
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
      href: '/pdf-to-jpg',
      title: 'PDF to JPG',
      description: 'Convert PDF to compressed JPG images for smaller file sizes',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
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
      href: '/pdf-to-text',
      title: 'PDF to Text',
      description: 'Extract all readable text content from your PDF documents',
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      href: '/pdf-to-word',
      title: 'PDF to Word',
      description: 'Convert PDF to editable Word documents (DOCX format)',
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Convert PDF Files Instantly - 100% Free
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Transform your PDF documents into images, text, or Word files in seconds.
            No uploads, no signups - all processing happens right in your browser for
            complete privacy.
          </p>
          {/* Top Ad Banner */}
          <div className="mb-8">
            <AdBanner slot="top" size="leaderboard" />
          </div>
        </section>

        {/* Converter Tool */}
        <section className="mb-12">
          <ConverterTool />
        </section>

        {/* Middle Ad Banner */}
        <section className="mb-12 flex justify-center">
          <AdBanner slot="middle" size="rectangle" />
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            Why Choose PDF Quick Convert?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} hover>
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conversion Links */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            Choose Your Conversion
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Card hover className="h-full">
                  <div className="text-primary-600 mb-3">{link.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{link.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            Frequently Asked Questions
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
          <div className="text-center mt-6">
            <Link
              href="/faq"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              View all FAQs →
            </Link>
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <section className="mb-12 flex justify-center">
          <AdBanner slot="bottom" size="leaderboard" />
        </section>

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            About PDF Conversion
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-4">
              PDF (Portable Document Format) is one of the most widely used document
              formats in the world. Created by Adobe in the 1990s, PDFs are designed to
              present documents consistently across all platforms and devices. However,
              there are times when you need your PDF content in a different format -
              whether for editing, sharing, or presentation purposes.
            </p>
            <p className="text-slate-600 mb-4">
              Our free PDF converter allows you to transform your PDF files into various
              formats including PNG images, JPG images, plain text files, and Microsoft
              Word documents. Unlike other online converters that require you to upload
              your sensitive documents to their servers, PDF Quick Convert processes
              everything directly in your web browser. This means your files never leave
              your computer, ensuring complete privacy and security.
            </p>
            <p className="text-slate-600">
              Whether you need to extract images from a PDF for a presentation, copy text
              from a document for editing, or convert a PDF to Word for making changes,
              our tool makes it simple and fast. The conversion happens instantly using
              modern web technologies, and you can download your converted files
              immediately. Try it now - no signup required!
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
