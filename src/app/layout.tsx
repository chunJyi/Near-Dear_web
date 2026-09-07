import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'LocateMe - Family Location Tracking App',
    template: '%s | LocateMe',
  },
  description:
    'LocateMe helps you share real-time location with your loved ones and track what matters most. Because their safety is your peace of mind.',
  keywords: [
    'location tracking',
    'family tracker',
    'GPS tracker',
    'real-time location',
    'family safety',
    'location sharing',
    'family locator',
  ],
  authors: [{ name: 'LocateMe Team' }],
  creator: 'LocateMe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://locateme.app',
    siteName: 'LocateMe',
    title: 'LocateMe - Family Location Tracking App',
    description:
      'Stay connected with your loved ones. Real-time location sharing for families.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LocateMe - Family Location Tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LocateMe - Family Location Tracking App',
    description:
      'Stay connected with your loved ones. Real-time location sharing for families.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
