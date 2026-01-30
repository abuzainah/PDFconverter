'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/pdf-to-png', label: 'PDF to PNG' },
  { href: '/pdf-to-jpg', label: 'PDF to JPG' },
  { href: '/pdf-to-text', label: 'PDF to Text' },
  { href: '/pdf-to-word', label: 'PDF to Word' },
  { href: '/faq', label: 'FAQ' },
];

interface NavigationProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export default function Navigation({
  mobile = false,
  onLinkClick,
}: NavigationProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isActive(link.href)
                ? 'bg-primary-100 text-primary-700 font-medium'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive(link.href)
              ? 'bg-primary-100 text-primary-700'
              : 'text-slate-600 hover:text-primary-600 hover:bg-slate-100'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
