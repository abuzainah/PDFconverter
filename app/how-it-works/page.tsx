import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works - PDF Conversion Process Explained',
  description: 'Learn how our browser-based PDF converter works. Understand the secure, private conversion process.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      title: 'Select Your PDF',
      description:
        'Drag and drop your PDF file into the upload area, or click to browse your computer. You can select any PDF up to 20MB in size.',
      details: [
        'Supports all standard PDF files',
        'Maximum file size: 20MB',
        'Drag & drop or click to browse',
        'File validation happens instantly',
      ],
    },
    {
      number: '2',
      title: 'Choose Output Format',
      description:
        'Select your desired output format from PNG, JPG, TXT, or DOCX. Each format has different benefits depending on your needs.',
      details: [
        'PNG: High quality with transparency',
        'JPG: Compressed for smaller size',
        'TXT: Plain text extraction',
        'DOCX: Editable Word document',
      ],
    },
    {
      number: '3',
      title: 'Click Convert',
      description:
        'Press the convert button to start the conversion. Your browser will process the PDF locally—nothing is uploaded to any server.',
      details: [
        '100% local processing',
        'Progress bar shows status',
        'Page-by-page conversion',
        'Cancel anytime if needed',
      ],
    },
    {
      number: '4',
      title: 'Download Your Files',
      description:
        'Once conversion is complete, download your files individually or as a ZIP archive for multiple files. Start converting another file instantly.',
      details: [
        'Individual file downloads',
        'ZIP download for multiple files',
        'High quality output',
        'Convert another file instantly',
      ],
    },
  ];

  const formats = [
    {
      format: 'PDF to PNG',
      href: '/pdf-to-png',
      bestFor: 'Presentations, documents with graphics, highest quality',
      features: [
        'Preserves transparency',
        'Lossless quality',
        '2x resolution (retina quality)',
        'Best for logos and graphics',
      ],
    },
    {
      format: 'PDF to JPG',
      href: '/pdf-to-jpg',
      bestFor: 'Photos, web sharing, when file size matters',
      features: [
        'Smaller file sizes',
        'Good compression',
        'Universal compatibility',
        'Best for photographs',
      ],
    },
    {
      format: 'PDF to Text',
      href: '/pdf-to-text',
      bestFor: 'Copying content, accessibility, text analysis',
      features: [
        'Extracts all readable text',
        'Preserves page structure',
        'Plain text format',
        'Easy to copy and paste',
      ],
    },
    {
      format: 'PDF to Word',
      href: '/pdf-to-word',
      bestFor: 'Editing documents, modifying content',
      features: [
        'Fully editable document',
        'DOCX format',
        'Text content preserved',
        'Basic formatting retained',
      ],
    },
  ];

  return (
    <div className="py-12">
      <Container>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            How PDF Quick Convert Works
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our browser-based converter transforms your PDFs into various formats
            in just a few simple steps—all while keeping your files completely private.
          </p>
        </div>

        {/* Top Ad Banner */}
        <div className="mb-12 flex justify-center">
          <AdBanner slot="top" size="leaderboard" />
        </div>

        {/* Step by Step Guide */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            Step by Step Guide
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Middle Ad Banner */}
        <div className="mb-12 flex justify-center">
          <AdBanner slot="middle" size="rectangle" />
        </div>

        {/* Technical Explanation */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto bg-slate-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Why Browser-Based Conversion is More Secure
            </h2>
            <p className="text-slate-600 mb-4">
              Traditional online PDF converters require you to upload your files to
              their servers. This means your sensitive documents travel over the
              internet and are stored (at least temporarily) on someone else&apos;s
              computer. You have no control over what happens to your data.
            </p>
            <p className="text-slate-600 mb-4">
              PDF Quick Convert takes a different approach. We use modern web
              technologies to process your files entirely within your browser:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>
                <strong>No Upload Required:</strong> Your PDF file is read directly
                by your browser—it never leaves your computer
              </li>
              <li>
                <strong>Local Processing:</strong> JavaScript code running in your
                browser handles the entire conversion
              </li>
              <li>
                <strong>No Server Storage:</strong> We have no servers storing your
                files because they&apos;re never sent to us
              </li>
              <li>
                <strong>Immediate Privacy:</strong> Close the browser tab and your
                files are completely gone
              </li>
            </ul>
            <p className="text-slate-600">
              This approach makes PDF Quick Convert the most private way to convert
              PDFs online. Your documents stay exactly where they should—on your device.
            </p>
          </Card>
        </section>

        {/* Format Specific Information */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            Choose the Right Format
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {formats.map((format, index) => (
              <Card key={index} hover className="h-full">
                <Link href={format.href} className="block">
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">
                    {format.format}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    <strong>Best for:</strong> {format.bestFor}
                  </p>
                  <ul className="space-y-2">
                    {format.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600">
                        <svg
                          className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <div className="mb-12 flex justify-center">
          <AdBanner slot="bottom" size="leaderboard" />
        </div>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to Convert Your PDF?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Start converting your PDFs now—no signup required, completely free,
            and 100% private.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Start Converting
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </section>
      </Container>
    </div>
  );
}
