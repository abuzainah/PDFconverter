'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import ConverterTool from '@/components/converter/ConverterTool';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/link';

export default function PdfToWordPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Will the Word document look exactly like my PDF?',
      answer:
        'The text content will be preserved, but complex layouts, graphics, and precise formatting may differ. Our converter is optimized for extracting editable text content. For preserving exact visual appearance, consider PNG or JPG conversion.',
    },
    {
      question: 'What Word format is created?',
      answer:
        'The converter creates DOCX files, which is the modern Microsoft Word format. DOCX files can be opened in Microsoft Word, Google Docs, LibreOffice Writer, and many other word processors.',
    },
    {
      question: 'Can I edit the converted Word document?',
      answer:
        'Yes! The main benefit of converting to Word is that the text becomes fully editable. You can modify, add, or delete content, change formatting, and save in any format your word processor supports.',
    },
    {
      question: 'Why is some formatting lost in the conversion?',
      answer:
        'PDF and Word documents store content very differently. PDFs are designed for fixed presentation, while Word documents are designed for editing. Complex layouts, custom fonts, and precise positioning may not transfer perfectly.',
    },
    {
      question: 'Can I convert scanned PDFs to editable Word documents?',
      answer:
        'No, scanned PDFs contain images rather than text. Our tool extracts existing text data only and does not perform OCR (optical character recognition). For scanned documents, you would need specialized OCR software first.',
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      title: 'Fully Editable',
      description: 'Edit text content in your word processor',
    },
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
      title: 'DOCX Format',
      description: 'Compatible with all modern word processors',
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
      title: 'Text Preserved',
      description: 'All document text content extracted',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: 'Page Structure',
      description: 'Maintains page breaks and organization',
    },
  ];

  return (
    <div className="py-8 sm:py-12">
      <Container>
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Convert PDF to Word
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Transform your PDF documents into editable Word files (DOCX). Make changes,
            add content, and save in any format—all processed securely in your browser.
          </p>
          <div className="mb-8">
            <AdBanner slot="top" size="leaderboard" />
          </div>
        </section>

        {/* Converter Tool */}
        <section className="mb-12">
          <ConverterTool defaultFormat="docx" hideFormatSelector />
        </section>

        {/* Middle Ad */}
        <section className="mb-12 flex justify-center">
          <AdBanner slot="middle" size="rectangle" />
        </section>

        {/* Why Convert */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Why Convert PDF to Word?
            </h2>
            <p className="text-slate-600 mb-4">
              While PDFs are excellent for sharing documents with consistent formatting,
              they&apos;re notoriously difficult to edit. Converting to Word (DOCX) format
              makes your document fully editable, allowing you to modify text, add
              content, and reformat as needed.
            </p>
            <p className="text-slate-600 mb-4">
              PDF to Word conversion is perfect for:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Editing document content and fixing errors</li>
              <li>Updating outdated information in documents</li>
              <li>Repurposing content for new documents</li>
              <li>Adding or removing sections from documents</li>
              <li>Changing formatting and styles</li>
              <li>Creating templates from existing PDFs</li>
            </ul>
            <p className="text-slate-600">
              The resulting DOCX file can be opened in Microsoft Word, Google Docs,
              LibreOffice Writer, and virtually any modern word processing application.
            </p>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            Word Conversion Features
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
              How to Convert PDF to Word
            </h2>
            <ol className="list-decimal list-inside text-slate-600 space-y-3">
              <li>
                <strong>Upload your PDF</strong> - Drag and drop your file or click
                to browse (max 20MB)
              </li>
              <li>
                <strong>Automatic conversion</strong> - Text is extracted and formatted
                into a Word document
              </li>
              <li>
                <strong>Download your DOCX file</strong> - Open and edit in any word
                processor
              </li>
            </ol>
            <p className="text-slate-600 mt-4 text-sm">
              Tip: For best results, use PDFs created from text documents rather than
              scanned images. Complex layouts may require some manual adjustment after
              conversion.
            </p>
          </Card>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            PDF to Word FAQ
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
            <Link href="/pdf-to-text">
              <Card hover className="text-center">
                <h3 className="font-semibold text-primary-600">PDF to Text</h3>
                <p className="text-sm text-slate-600">Plain text extraction</p>
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
