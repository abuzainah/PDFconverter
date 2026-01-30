'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import ConverterTool from '@/components/converter/ConverterTool';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/link';

export default function PdfToTextPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does text extraction work?',
      answer:
        'Our tool reads the text layer embedded in your PDF document. It extracts all readable text content while preserving the general structure and flow. Page separators are added for multi-page documents.',
    },
    {
      question: 'Can I extract text from scanned PDFs?',
      answer:
        'No, scanned PDFs contain images of text, not actual text characters. Our tool extracts existing text data only and does not perform OCR (optical character recognition). For scanned documents, you would need specialized OCR software.',
    },
    {
      question: 'Will formatting be preserved?',
      answer:
        'The extracted text maintains basic structure like paragraphs and line breaks, but rich formatting (bold, italic, fonts, colors) is not preserved. The output is plain text suitable for copying, editing, or processing.',
    },
    {
      question: 'What if my PDF has multiple columns?',
      answer:
        'Text is extracted in reading order as determined by the PDF. Multi-column layouts may not always extract in the expected order, depending on how the PDF was created.',
    },
    {
      question: 'Why is some text missing from my extracted content?',
      answer:
        'Some PDFs use images instead of real text, or have text rendered as vector graphics. In these cases, the text cannot be extracted. Also, text in embedded images within the PDF cannot be extracted.',
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: 'Full Text Extraction',
      description: 'Captures all readable text from your PDF',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      ),
      title: 'Structure Preserved',
      description: 'Maintains paragraphs and page breaks',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Easy to Copy',
      description: 'Plain text format for any use',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Instant Results',
      description: 'Fast extraction from any PDF',
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Convert PDF to Text
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Extract all readable text content from your PDF documents instantly.
            Perfect for copying, editing, or processing text—all done securely in
            your browser.
          </p>
          <div className="mb-8">
            <AdBanner slot="top" size="leaderboard" />
          </div>
        </section>

        {/* Converter Tool */}
        <section className="mb-12">
          <ConverterTool defaultFormat="txt" hideFormatSelector />
        </section>

        {/* Middle Ad */}
        <section className="mb-12 flex justify-center">
          <AdBanner slot="middle" size="rectangle" />
        </section>

        {/* Why Convert */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Why Extract Text from PDF?
            </h2>
            <p className="text-slate-600 mb-4">
              PDF files are great for preserving document formatting, but extracting
              the text content can be challenging. Our PDF to Text converter makes
              it easy to pull out all the readable text from your documents for
              further use.
            </p>
            <p className="text-slate-600 mb-4">
              Text extraction is useful for:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Copying content to other documents or applications</li>
              <li>Searching through document content</li>
              <li>Creating accessible versions of documents</li>
              <li>Analyzing or processing document text programmatically</li>
              <li>Archiving document content in a simple format</li>
              <li>Reducing file size when only text is needed</li>
            </ul>
            <p className="text-slate-600">
              The extracted text is saved as a plain TXT file that can be opened
              in any text editor, word processor, or programming environment.
            </p>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            Text Extraction Features
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
              How to Extract Text from PDF
            </h2>
            <ol className="list-decimal list-inside text-slate-600 space-y-3">
              <li>
                <strong>Upload your PDF</strong> - Drag and drop your file or click
                to browse (max 20MB)
              </li>
              <li>
                <strong>Automatic extraction</strong> - All text content is extracted
                page by page
              </li>
              <li>
                <strong>Download your text file</strong> - Get a plain TXT file with
                all extracted content
              </li>
            </ol>
            <p className="text-slate-600 mt-4 text-sm">
              Note: Text extraction works best on PDFs created from text documents.
              Scanned documents (images) cannot have their text extracted without OCR.
            </p>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            PDF to Text FAQ
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
                <p className="text-sm text-slate-600">High quality images</p>
              </Card>
            </Link>
            <Link href="/pdf-to-jpg">
              <Card hover className="text-center">
                <h3 className="font-semibold text-primary-600">PDF to JPG</h3>
                <p className="text-sm text-slate-600">Compressed images</p>
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
