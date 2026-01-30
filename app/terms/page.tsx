import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import AdBanner from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'Terms of Service - PDF Quick Convert',
  description: 'Terms and conditions for using our free PDF converter service.',
};

export default function TermsPage() {
  return (
    <div className="py-12">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            <strong>Last Updated:</strong> January 2024
          </p>

          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 mb-4">
              By accessing and using PDF Quick Convert (&quot;the Service&quot;), you accept
              and agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our Service.
            </p>
          </section>

          {/* Description of Service */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              2. Description of Service
            </h2>
            <p className="text-slate-600 mb-4">
              PDF Quick Convert provides a free online tool for converting PDF files
              to various formats including:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>PNG images</li>
              <li>JPG images</li>
              <li>Plain text (TXT) files</li>
              <li>Microsoft Word documents (DOCX)</li>
            </ul>
            <p className="text-slate-600 mb-4">
              All conversions are performed entirely within your web browser using
              client-side JavaScript technology. Your files are never uploaded to
              our servers.
            </p>
          </section>

          <div className="my-8 flex justify-center">
            <AdBanner slot="middle" size="rectangle" />
          </div>

          {/* User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-slate-600 mb-4">By using our Service, you agree that:</p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>
                You have the legal right to convert any files you process through
                our Service
              </li>
              <li>
                You will not use the Service to convert any illegal, harmful, or
                offensive content
              </li>
              <li>
                You will not attempt to circumvent, disable, or interfere with
                security features of the Service
              </li>
              <li>You will not use the Service for any malicious or unlawful purpose</li>
              <li>
                You are solely responsible for all files you convert and any
                consequences of their conversion
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-slate-600 mb-4">
              <strong>Your Files:</strong> You retain all rights, title, and interest
              in and to any files you convert using our Service. We do not claim any
              ownership rights to your content.
            </p>
            <p className="text-slate-600 mb-4">
              <strong>Our Content:</strong> The PDF Quick Convert website, including
              its design, text, graphics, logos, and software, is owned by us and
              protected by copyright and other intellectual property laws. You may
              not copy, modify, distribute, or reproduce our content without prior
              written permission.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-slate-600 mb-4">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy, reliability, or availability of the Service</li>
            </ul>
            <p className="text-slate-600 mb-4">
              We do not guarantee that the Service will be uninterrupted, secure,
              or error-free. Use the Service at your own risk.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-slate-600 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PDF QUICK CONVERT AND ITS
              OPERATORS SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Any damages arising from the use or inability to use the Service</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Since all file processing occurs locally in your browser, we never have
              access to your files and cannot be held responsible for any issues
              related to your file content.
            </p>
          </section>

          {/* Advertising */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              7. Advertising
            </h2>
            <p className="text-slate-600 mb-4">
              Our Service displays third-party advertisements provided by Google
              AdSense and other advertising networks. We are not responsible for the
              content of these advertisements. Clicking on advertisements may take
              you to third-party websites that have their own terms of service and
              privacy policies.
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              8. Modifications to Service and Terms
            </h2>
            <p className="text-slate-600 mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Modify or discontinue the Service at any time without notice</li>
              <li>Update these Terms of Service at any time</li>
              <li>Change or remove features of the Service</li>
            </ul>
            <p className="text-slate-600 mb-4">
              Your continued use of the Service after any modifications constitutes
              your acceptance of the updated terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              9. Governing Law
            </h2>
            <p className="text-slate-600 mb-4">
              These Terms of Service shall be governed by and construed in accordance
              with applicable laws. Any disputes arising from these terms or your use
              of the Service shall be resolved through appropriate legal channels.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              10. Contact Information
            </h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about these Terms of Service, please contact
              us through our{' '}
              <a
                href="/contact"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Contact Page
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
