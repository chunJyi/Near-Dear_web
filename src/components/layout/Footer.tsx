'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { scrollToElement } from '@/lib/utils';

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: 'hero' },
    { label: 'Features', href: 'features' },
    { label: 'How It Works', href: 'how-it-works' },
    { label: 'Screenshots', href: 'screenshots' },
    { label: 'Download', href: 'download' },
  ],
  legal: [
    { label: 'Terms & Conditions', href: '/legal/terms' },
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Location Privacy', href: '/legal/location-privacy' },
    { label: 'Community Rules', href: '/legal/community-rules' },
    { label: 'Disclaimer', href: '/legal/disclaimer' },
  ],
};

const socialLinks = [
  { href: 'https://github.com/chunJyi/Near-Dear_web', label: 'GitHub', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )},
];

export function Footer() {
  const handleLinkClick = (href: string) => {
    scrollToElement(href);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/images/near&DearLogo.png" alt="Near&Dear" className="h-8 w-auto brightness-0 invert" />
              <span className="text-xl font-bold text-white">
                Near<span className="text-primary-400">&amp;</span>Dear
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Stay close to the ones you love. Friend-based location sharing with per-friend privacy controls.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-primary-600 flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">
              &copy; {new Date().getFullYear()} Near&amp;Dear. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/legal/privacy"
                className="text-xs text-neutral-500 hover:text-neutral-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms"
                className="text-xs text-neutral-500 hover:text-neutral-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
