import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg
                className="w-6 h-6 text-primary-400"
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
              <span className="text-lg font-semibold text-white">
                PDF Quick Convert
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Free, secure PDF conversion in your browser. No uploads, no signups,
              just instant conversions.
            </p>
          </div>

          {/* Convert Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Convert</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pdf-to-png"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  PDF to PNG
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-to-jpg"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  PDF to JPG
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-to-text"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  PDF to Text
                </Link>
              </li>
              <li>
                <Link
                  href="/pdf-to-word"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  PDF to Word
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} PDF Quick Convert. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
