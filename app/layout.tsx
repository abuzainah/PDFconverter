import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Free PDF Converter - Convert PDF to PNG, JPG, Word, Text Online',
  description:
    'Convert your PDF files to images, text, or Word documents instantly. Free, secure, and no signup required. All processing happens in your browser.',
  keywords:
    'pdf converter, pdf to png, pdf to jpg, pdf to word, pdf to text, free pdf converter, online pdf tool',
  authors: [{ name: 'PDF Quick Convert' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Free PDF Converter - Convert PDF to PNG, JPG, Word, Text Online',
    description:
      'Convert your PDF files to images, text, or Word documents instantly. Free, secure, and no signup required.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PDF Quick Convert',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF Converter - Convert PDF to PNG, JPG, Word, Text Online',
    description:
      'Convert your PDF files to images, text, or Word documents instantly. Free, secure, and no signup required.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense script will be added here after approval */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> */}
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 text-slate-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
