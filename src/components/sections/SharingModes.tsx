'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Radio, MapPin, EyeOff } from 'lucide-react';

const modes = [
  {
    icon: Radio,
    title: 'Live',
    description: 'Real-time GPS location, updated continuously.',
    color: 'from-success to-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    iconColor: 'text-success',
    badge: 'Real-time',
  },
  {
    icon: MapPin,
    title: 'Pinned',
    description: 'Share one fixed, chosen location instead of live GPS.',
    color: 'from-warning to-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    iconColor: 'text-warning',
    badge: 'Fixed location',
  },
  {
    icon: EyeOff,
    title: 'Hidden',
    description: 'Location sharing turned off for that friend.',
    color: 'from-neutral-400 to-neutral-500',
    bgColor: 'bg-neutral-100 dark:bg-neutral-800',
    iconColor: 'text-neutral-500',
    badge: 'Off',
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

export function SharingModes() {
  return (
    <section
      id="sharing-modes"
      className="relative py-20 lg:py-32 bg-white dark:bg-neutral-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="Sharing Modes"
          title="Choose How You"
          highlight="Share"
          description="Per-friend, switchable anytime — this is the app's actual privacy model and its strongest selling point."
        />

        {/* Modes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300"
            >
              {/* Badge */}
              <span className={cn(
                'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-6',
                mode.bgColor, mode.iconColor
              )}>
                {mode.badge}
              </span>

              {/* Icon */}
              <div className={cn(
                'w-16 h-16 rounded-2xl flex items-center justify-center mb-6',
                mode.bgColor
              )}>
                <mode.icon className={cn('w-8 h-8', mode.iconColor)} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                {mode.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {mode.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-sm text-neutral-500 dark:text-neutral-400"
        >
          Switch between modes for each friend individually — your choice for one person doesn't affect others.
        </motion.p>
      </div>
    </section>
  );
}

// Need to import cn
import { cn } from '@/lib/utils';
