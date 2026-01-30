import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import AdBanner from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'About Us - PDF Quick Convert',
  description: 'Learn about PDF Quick Convert and our mission to provide free, secure PDF conversion tools.',
};

export default function AboutPage() {
  const values = [
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
      title: 'Privacy First',
      description:
        'Your files never leave your device. All processing happens in your browser for complete security.',
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Always Free',
      description:
        'Our tool is completely free to use. We support the service through advertisements.',
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
      title: 'Fast & Reliable',
      description:
        'Instant conversions using modern web technology. No waiting for uploads or processing.',
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'No Account Needed',
      description:
        'Start converting immediately. No signup, no email verification, no hassle.',
    },
  ];

  return (
    <div className="py-12">
      <Container>
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            About PDF Quick Convert
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe that everyone should have access to powerful PDF tools without
            compromising their privacy or paying expensive subscription fees.
          </p>
        </section>

        {/* Ad Banner */}
        <div className="mb-12 flex justify-center">
          <AdBanner slot="top" size="leaderboard" />
        </div>

        {/* Our Mission */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-slate-600 mb-4">
              PDF Quick Convert was created with a simple mission: to provide everyone
              with free, secure, and easy-to-use PDF conversion tools. We recognized
              that many people need to convert PDF files occasionally, but shouldn&apos;t
              have to pay for expensive software or risk their privacy by uploading
              sensitive documents to unknown servers.
            </p>
            <p className="text-slate-600">
              Our solution is a browser-based converter that processes your files
              entirely on your own device. This means your documents stay private,
              your conversions happen instantly, and you never have to worry about
              your data being stored or misused.
            </p>
          </Card>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center mb-8">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <div className="text-primary-600 mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Ad Banner */}
        <div className="mb-12 flex justify-center">
          <AdBanner slot="middle" size="rectangle" />
        </div>

        {/* Our Technology */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Technology</h2>
            <p className="text-slate-600 mb-4">
              PDF Quick Convert leverages modern web technologies to deliver powerful
              PDF conversion capabilities directly in your browser. We use advanced
              JavaScript libraries that can read, process, and convert PDF documents
              without any server-side processing.
            </p>
            <p className="text-slate-600 mb-4">
              Here&apos;s how it works:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>
                <strong>PDF Reading:</strong> We use PDF.js, the same technology that
                powers Firefox&apos;s PDF viewer, to read and render PDF documents
              </li>
              <li>
                <strong>Image Conversion:</strong> PDF pages are rendered to HTML5
                Canvas elements, then converted to high-quality PNG or JPG images
              </li>
              <li>
                <strong>Text Extraction:</strong> Our text extractor preserves the
                structure and flow of your document&apos;s content
              </li>
              <li>
                <strong>Word Documents:</strong> We use the docx library to create
                properly formatted Word documents from extracted PDF content
              </li>
            </ul>
            <p className="text-slate-600">
              All of this happens within your browser, using your computer&apos;s
              processing power. Your files are never transmitted over the internet,
              making this the most secure way to convert PDFs online.
            </p>
          </Card>
        </section>

        {/* Our Commitment */}
        <section className="mb-12">
          <Card className="max-w-4xl mx-auto bg-primary-50 border-primary-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Commitment</h2>
            <p className="text-slate-600 mb-4">
              We are committed to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Keeping PDF Quick Convert free for everyone</li>
              <li>Continuously improving our conversion quality and features</li>
              <li>Maintaining the highest standards of privacy and security</li>
              <li>Listening to user feedback and implementing requested features</li>
              <li>Being transparent about how our service works</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Your trust is important to us. If you have any questions, suggestions,
              or concerns, please don&apos;t hesitate to{' '}
              <a
                href="/contact"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                contact us
              </a>
              .
            </p>
          </Card>
        </section>
      </Container>
    </div>
  );
}
