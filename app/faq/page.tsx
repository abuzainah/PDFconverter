'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import AdBanner from '@/components/ads/AdBanner';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    title: 'General Questions',
    items: [
      {
        question: 'What is PDF Quick Convert?',
        answer:
          'PDF Quick Convert is a free online tool that converts PDF files to various formats including PNG images, JPG images, plain text (TXT), and Word documents (DOCX). All conversions happen entirely in your browser for maximum privacy and security.',
      },
      {
        question: 'Is this service really free?',
        answer:
          'Yes, PDF Quick Convert is completely free to use. We support the service through advertisements, which allows us to provide these tools at no cost to our users.',
      },
      {
        question: 'Do I need to create an account?',
        answer:
          'No, you can start converting PDFs immediately without any registration. We believe in making our tools accessible to everyone without barriers.',
      },
      {
        question: 'What formats can I convert PDF to?',
        answer:
          'You can convert PDF files to PNG images (with transparency support), JPG images (smaller file sizes), plain text files (TXT), and Microsoft Word documents (DOCX).',
      },
      {
        question: 'Is there a file size limit?',
        answer:
          'Yes, the maximum file size is 20MB. This limit ensures smooth performance in your browser while still accommodating most document sizes.',
      },
    ],
  },
  {
    title: 'Security and Privacy',
    items: [
      {
        question: 'Is my PDF file secure?',
        answer:
          'Absolutely. All processing happens locally in your web browser using JavaScript. Your files are never uploaded to our servers or any third-party servers. They stay on your device throughout the entire conversion process.',
      },
      {
        question: 'Do you store my files?',
        answer:
          'No, we never see, store, or have access to your files. The conversion happens entirely on your device using your browser. Once you close the page, your files and converted documents are gone.',
      },
      {
        question: 'How does browser-based conversion work?',
        answer:
          'Modern web browsers can run sophisticated JavaScript code that processes files locally. We use PDF.js (the same technology that powers Firefox PDF viewer) to read your PDF, then convert it to your chosen format right in your browser. Your data never travels over the internet.',
      },
      {
        question: 'Can you see the content of my PDFs?',
        answer:
          'No, we have absolutely no access to your files. The PDF never leaves your computer. Our website only provides the code that runs in your browser—your actual documents stay completely private.',
      },
    ],
  },
  {
    title: 'Technical Questions',
    items: [
      {
        question: 'Why did my conversion fail?',
        answer:
          'Conversions can fail for several reasons: the PDF file may be corrupted, password-protected, or exceed the 20MB size limit. Try with a different PDF or remove any password protection before converting.',
      },
      {
        question: 'What browsers are supported?',
        answer:
          'PDF Quick Convert works on all modern web browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera. We recommend using the latest version of your browser for the best experience.',
      },
      {
        question: 'Can I convert password-protected PDFs?',
        answer:
          'No, password-protected PDFs cannot be converted directly. You will need to remove the password protection from the PDF using other software before converting it with our tool.',
      },
      {
        question: "What's the maximum number of pages?",
        answer:
          'There is no strict page limit, but very large documents with many pages may take longer to process and could be slower depending on your computer. For best performance, we recommend documents under 100 pages.',
      },
      {
        question: 'Why is the text extraction not perfect?',
        answer:
          'Text extraction depends on how the PDF was created. If the PDF was created from a text document, extraction works well. However, scanned documents (images of text) cannot have their text extracted because they contain images, not actual text data. Our tool extracts existing text only—it does not perform OCR (optical character recognition).',
      },
    ],
  },
  {
    title: 'Output Quality',
    items: [
      {
        question: 'What resolution are the PNG/JPG images?',
        answer:
          'Images are rendered at 2x scale (retina quality) for high-resolution output. This means a standard letter-size page will produce an image approximately 1700 x 2200 pixels, ensuring crisp and clear results.',
      },
      {
        question: 'Will the Word document look exactly like my PDF?',
        answer:
          'The text content will be preserved, but complex formatting, layouts, and graphics may differ. Word documents created from PDFs are best for extracting and editing text content. For preserving exact visual appearance, use PNG or JPG conversion.',
      },
      {
        question: 'Can I convert scanned PDFs to text?',
        answer:
          'Scanned PDFs contain images of text, not actual text characters. Our tool extracts existing text only and does not perform OCR (optical character recognition). For scanned documents, you would need specialized OCR software.',
      },
      {
        question: 'What is the difference between PNG and JPG?',
        answer:
          'PNG supports transparency and provides lossless quality, making it ideal for documents with graphics, logos, or when you need the highest quality. JPG uses compression resulting in smaller file sizes, which is better for photos and when file size is a concern. For most documents, PNG is recommended.',
      },
    ],
  },
];

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our PDF conversion tool.
          </p>
        </div>

        {/* Top Ad Banner */}
        <div className="mb-8 flex justify-center">
          <AdBanner slot="top" size="leaderboard" />
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={itemIndex}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-medium text-slate-800 pr-4">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
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
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-slate-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Ad between categories */}
              {categoryIndex === 1 && (
                <div className="mt-8 flex justify-center">
                  <AdBanner slot="middle" size="rectangle" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Ad Banner */}
        <div className="mt-12 flex justify-center">
          <AdBanner slot="bottom" size="leaderboard" />
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Contact Us
            <svg
              className="w-4 h-4 ml-2"
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
          </a>
        </div>
      </Container>
    </div>
  );
}
