'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In production, you would integrate with Formspree, Getform, or similar
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="py-12">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-slate-600 text-center mb-8 max-w-2xl mx-auto">
          Have a question, suggestion, or need help? We&apos;d love to hear from you.
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>

        {/* Ad Banner */}
        <div className="mb-8 flex justify-center">
          <AdBanner slot="top" size="leaderboard" />
        </div>

        <Card className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
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
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">
                Message Sent!
              </h2>
              <p className="text-slate-600 mb-6">
                Thank you for contacting us. We&apos;ll get back to you within 48 hours.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'general', message: '' });
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-y"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                Send Message
              </Button>
            </form>
          )}
        </Card>

        {/* Additional Info */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="bg-slate-50">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Other Ways to Get Help
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-primary-100 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">
                    Check Our FAQ
                  </h3>
                  <p className="text-sm text-slate-600">
                    Many common questions are answered in our{' '}
                    <Link
                      href="/faq"
                      className="text-primary-600 hover:text-primary-700 underline"
                    >
                      FAQ section
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 bg-primary-100 rounded-lg mr-4">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800">Response Time</h3>
                  <p className="text-sm text-slate-600">
                    We typically respond within 48 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Note about form handling */}
        <p className="text-center text-sm text-slate-500 mt-8">
          Note: This contact form is a demonstration. To make it functional, integrate
          with a form handling service like Formspree or Getform.
        </p>
      </Container>
    </div>
  );
}
