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
    default: 'Near&Dear – Family & Friend Location Sharing App',
    template: '%s | Near&Dear',
  },
  description:
    'Share real-time location with family and friends. Live sharing, pinned locations, and per-friend privacy controls — track on Google Maps.',
  keywords: [
    'location sharing app',
    'family tracker',
    'friend location',
    'real-time tracking',
    'GPS sharing',
    'Near&Dear',
    'friend location sharing app',
  ],
  authors: [{ name: 'Near&Dear Team' }],
  creator: 'Near&Dear',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nearanddear.pages.dev/',
    siteName: 'Near&Dear',
    title: 'Near&Dear – Family & Friend Location Sharing App',
    description:
      'Share real-time location with family and friends. Track on Google Maps.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Near&Dear – Family & Friend Location Sharing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Near&Dear – Family & Friend Location Sharing App',
    description:
      'Share real-time location with family and friends. Track on Google Maps.',
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
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Near&Dear',
              operatingSystem: 'ANDROID',
              applicationCategory: 'SocialNetworkingApplication',
              description:
                'Friend and family location sharing app with live, pinned, and hidden sharing modes.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
