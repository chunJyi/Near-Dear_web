'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'How do I install Near&Dear?',
    answer: 'Download the APK file from this page and install it on your Android device. You may need to enable "Install from unknown sources" in your device settings.',
  },
  {
    question: 'Why does the app need location permission?',
    answer: 'Near&Dear needs location access to share your position with friends you\'ve chosen. Without it, the core feature — live location sharing — won\'t work.',
  },
  {
    question: 'Does it drain my battery?',
    answer: 'Near&Dear includes an adjustable update-distance slider (1–50m) so you can control how often your location is updated. Lower frequency means less battery usage.',
  },
  {
    question: 'Can I hide my location from specific people?',
    answer: 'Yes — use Hidden mode for any friend. This turns off location sharing for that person only, while you can still share with others.',
  },
  {
    question: 'Can I delete my account?',
    answer: 'Account deletion is coming soon. We\'re working on making this available in a future update.',
  },
  {
    question: 'Is Near&Dear available in other languages?',
    answer: 'The app interface supports English and Myanmar. This website is in English only.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          description="Got questions? We've got answers."
        />

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200"
              >
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
