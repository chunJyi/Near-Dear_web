'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Eye, ToggleLeft, Ban, Shield } from 'lucide-react';

const privacyFeatures = [
  {
    icon: Eye,
    title: 'You Decide Who Sees',
    description: 'Nothing is shared by default. You choose exactly who can see your location.',
  },
  {
    icon: ToggleLeft,
    title: 'Per-Friend Sharing Mode',
    description: 'Set each friend to Live, Pinned, or Hidden independently — full control over every connection.',
  },
  {
    icon: Ban,
    title: 'Turn Off Anytime',
    description: 'One tap to stop sharing. No waiting period, no questions asked.',
  },
  {
    icon: Shield,
    title: 'We Don\'t Sell Your Data',
    description: 'Your location data stays yours. We don\'t sell or publicly share it.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function Privacy() {
  return (
    <section
      id="privacy"
      className="relative py-20 lg:py-32 bg-white dark:bg-neutral-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="Privacy"
          title="Your Privacy is Our"
          highlight="Priority"
          description="We built Near&Dear with privacy at its core. You control everything — nothing is shared without your explicit choice."
        />

        {/* Privacy Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-800 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
