import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import AdBanner from '@/components/ads/AdBanner';

export const metadata: Metadata = {
  title: 'Privacy Policy - PDF Quick Convert',
  description: 'Our privacy policy explains how we handle your data and protect your privacy when using our free PDF converter.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 mb-6">
            <strong>Last Updated:</strong> January 2024
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-slate-600 mb-4">
              Welcome to PDF Quick Convert. This Privacy Policy describes how we collect,
              use, and handle your information when you use our website and services.
              We are committed to protecting your privacy and being transparent about
              our data practices.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-slate-600 mb-4">
              <strong>PDF File Processing:</strong> Our PDF conversion tool operates
              entirely within your web browser. When you upload a PDF file for conversion:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Your files are processed locally in your browser using JavaScript</li>
              <li>No files are uploaded to our servers or any third-party servers</li>
              <li>We do not have access to, store, or retain any of your PDF files</li>
              <li>Your files never leave your device during the conversion process</li>
            </ul>
            <p className="text-slate-600 mb-4">
              <strong>Automatically Collected Information:</strong> When you visit our
              website, we may automatically collect certain information including:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages viewed and time spent on pages</li>
              <li>IP address (anonymized for analytics)</li>
            </ul>
          </section>

          <div className="my-8 flex justify-center">
            <AdBanner slot="middle" size="rectangle" />
          </div>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="text-slate-600 mb-4">
              Our website uses cookies and similar tracking technologies for:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for basic site functionality
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors
                interact with our website
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used by our advertising partners
                to serve relevant advertisements
              </li>
            </ul>
          </section>

          {/* Google AdSense */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              4. Google AdSense and Advertising
            </h2>
            <p className="text-slate-600 mb-4">
              We use Google AdSense to display advertisements on our website. Google
              AdSense uses cookies to serve ads based on your prior visits to our
              website and other websites on the internet.
            </p>
            <p className="text-slate-600 mb-4">
              Third-party vendors, including Google, use cookies to serve ads based
              on your visits to this and other websites. Google&apos;s use of advertising
              cookies enables it and its partners to serve ads based on your visit
              to our site and/or other sites on the Internet.
            </p>
            <p className="text-slate-600 mb-4">
              You may opt out of personalized advertising by visiting{' '}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Google Ad Settings
              </a>
              .
            </p>
            <p className="text-slate-600 mb-4">
              For more information about how Google uses data when you use our
              website, please visit{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Google&apos;s Privacy & Terms
              </a>
              .
            </p>
            <p className="text-slate-600 mb-4">
              This site adheres to the Google AdSense Program Policies.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              5. Data Security
            </h2>
            <p className="text-slate-600 mb-4">
              We take data security seriously. Our approach includes:
            </p>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-2">
              <li>
                All file processing occurs locally in your browser, eliminating
                transmission risks
              </li>
              <li>Our website uses HTTPS encryption for secure connections</li>
              <li>We do not store your personal files on any server</li>
              <li>
                Your converted files exist only in your browser memory until you
                download them
              </li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              6. Third-Party Links
            </h2>
            <p className="text-slate-600 mb-4">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. We encourage you to read the privacy policies of any websites
              you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-slate-600 mb-4">
              Our website is not directed at children under the age of 13. We do not
              knowingly collect personal information from children under 13. If you
              believe we have inadvertently collected information from a child under
              13, please contact us so we can take appropriate action.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-slate-600 mb-4">
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page and
              updating the &quot;Last Updated&quot; date. Your continued use of our website
              after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              9. Contact Us
            </h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us through our{' '}
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
