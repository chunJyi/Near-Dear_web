'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardHeader } from '@/components/ui/Card';
import { Navigation, Bell, Clock, Shield, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Navigation,
    title: 'Real-time Tracking',
    description: 'Track live location of your family or friends in real time with precise GPS accuracy.',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50 dark:bg-primary-950/30',
    iconColor: 'text-primary-600 dark:text-primary-400',
  },
  {
    icon: Bell,
    title: 'Instant Alerts',
    description: 'Get notified when your loved ones arrive or leave a place. Never miss a moment.',
    color: 'from-secondary-500 to-secondary-600',
    bgColor: 'bg-secondary-50 dark:bg-secondary-950/30',
    iconColor: 'text-secondary-600 dark:text-secondary-400',
  },
  {
    icon: Clock,
    title: 'Location History',
    description: 'View location history and travel routes. Know where they\'ve been throughout the day.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'End-to-end encrypted location sharing. Your data stays private and secure.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
    iconColor: 'text-orange-600 dark:text-orange-400',
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

export function Features() {
  return (
    <section
      id="features"
      className="relative py-20 lg:py-32 bg-white dark:bg-neutral-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="Features"
          title="Everything You Need for"
          highlight="Safety"
          description="Powerful features designed to keep your family connected and protected, wherever they are."
        />

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                variant="default"
                hover
                className="h-full group relative overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Icon */}
                <div className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center mb-4',
                  feature.bgColor
                )}>
                  <feature.icon className={cn('w-7 h-7', feature.iconColor)} />
                </div>

                {/* Content */}
                <CardHeader
                  title={feature.title}
                  description={feature.description}
                />

                {/* Learn More Link */}
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 lg:mt-24"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 p-8 lg:p-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDE0em0wLTR2Mkg4VjI4aDI4ek0xNiA0MHYySDh2LTJoOHptMTItMTB2Mkg4VjI4aDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Advanced Geofencing Technology
                </h3>
                <p className="text-primary-100 max-w-lg">
                  Set up custom geofences around important locations like home, school, or work.
                  Get instant alerts when family members enter or leave these zones.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {['Custom Zones', 'Smart Alerts', 'Multiple Locations', 'Real-time Updates'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Geofence Visualization */}
              <div className="relative h-64 lg:h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer ring */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-48 h-48 rounded-full border-2 border-white/20"
                  />
                  {/* Middle ring */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute w-36 h-36 rounded-full border-2 border-white/30"
                  />
                  {/* Inner ring */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute w-24 h-24 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm"
                  />
                  {/* Center pin */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-primary-600" />
                  </div>
                  {/* Floating dots */}
                  <motion.div
                    animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-white/50"
                  />
                  <motion.div
                    animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/40"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
