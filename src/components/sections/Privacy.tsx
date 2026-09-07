'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Shield, Lock, Eye, Server, Key, Fingerprint } from 'lucide-react';

const privacyFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All location data is encrypted from your device to the recipient. No one else can read it.',
  },
  {
    icon: Eye,
    title: 'You Control Who Sees',
    description: 'Choose exactly who can see your location. Revoke access anytime with one tap.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Hosted on enterprise-grade servers with 99.9% uptime and automatic backups.',
  },
  {
    icon: Key,
    title: 'Two-Factor Auth',
    description: 'Add an extra layer of security with biometric or SMS verification.',
  },
  {
    icon: Fingerprint,
    title: 'Data Ownership',
    description: 'Your data belongs to you. Delete your account and all data is permanently removed.',
  },
  {
    icon: Shield,
    title: 'Regular Audits',
    description: 'Independent security firms audit our systems quarterly to ensure compliance.',
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
          description="We built LocateMe with privacy at its core. Your location data is encrypted and never sold."
        />

        {/* Privacy Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 hover:bg-white dark:hover:bg-neutral-800 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              GDPR Compliant • SOC 2 Certified • ISO 27001
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
