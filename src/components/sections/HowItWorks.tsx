'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Search, UserPlus, ToggleRight, Map } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Sign in with Google',
    description: 'One-tap sign-in, no separate account to create.',
  },
  {
    icon: UserPlus,
    step: '02',
    title: 'Search and Add Friends',
    description: 'Find people by name and send a request.',
  },
  {
    icon: ToggleRight,
    step: '03',
    title: 'Turn On Location Sharing',
    description: 'Start sharing with a single toggle.',
  },
  {
    icon: Map,
    step: '04',
    title: 'Track on the Map',
    description: 'See friends\' locations live, with follow mode.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="How It Works"
          title="Get Started in"
          highlight="4 Simple Steps"
          description="Setting up Near&Dear takes less than a minute."
        />

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-primary-300 to-primary-100 dark:from-primary-700 dark:to-primary-900" />
              )}

              <div className="text-center space-y-4">
                {/* Step number */}
                <div className="relative inline-flex">
                  <div className="w-20 h-20 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-bold flex items-center justify-center z-20">
                    {step.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {step.description}
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
