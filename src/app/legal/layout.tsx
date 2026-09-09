import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Header */}
      <div className="sticky top-0 z-[1100] bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-sm text-neutral-400">|</span>
          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Near&Dear
          </span>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert prose-headings:font-bold prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100 prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-li:text-neutral-600 dark:prose-li:text-neutral-400 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100">
          {children}
        </div>
      </main>

      {/* Footer */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Near&Dear. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
