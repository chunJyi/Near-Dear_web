'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card, CardHeader } from '@/components/ui/Card';
import { Navigation, MapPin, Users, Map } from 'lucide-react';

const features = [
  {
    icon: Navigation,
    title: 'Live Location Sharing',
    description: 'See your friends\' current location in real time, with accurate GPS positioning.',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50 dark:bg-primary-950/30',
    iconColor: 'text-primary-500',
  },
  {
    icon: MapPin,
    title: 'Pinned Locations',
    description: 'Save important places like home, work, or school and share them instead of your live GPS — up to 3 saved locations.',
    color: 'from-warning to-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    iconColor: 'text-warning',
  },
  {
    icon: Users,
    title: 'Friend Connections',
    description: 'Search for friends, send requests, and mark your closest people as favorites for quick access.',
    color: 'from-success to-emerald-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    iconColor: 'text-success',
  },
  {
    icon: Map,
    title: 'Map Tracking',
    description: 'View friends\' locations on Google Maps, with a "Follow" mode that keeps the camera centered on them automatically.',
    color: 'from-info to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    iconColor: 'text-info',
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
          highlight="Connection"
          description="Friend-based location sharing for family, close friends, roommates, and anyone who wants peace of mind."
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
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                <div className={cn(
                  'w-14 h-14 rounded-xl flex items-center justify-center mb-4',
                  feature.bgColor
                )}>
                  <feature.icon className={cn('w-7 h-7', feature.iconColor)} />
                </div>

                <CardHeader
                  title={feature.title}
                  description={feature.description}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Sharing Modes Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 lg:mt-24"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-8 lg:p-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDE0em0wLTR2Mkg4VjI4aDI4ek0xNiA0MHYySDh2LTJoOHptMTItMTB2Mkg4VjI4aDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Per-Friend Privacy Control
                </h3>
                <p className="text-primary-100 max-w-lg">
                  Not a generic tracker — sharing is opt-in, per-friend, and reversible at any time.
                  Set each friend to Live, Pinned, or Hidden independently.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {['Live Mode', 'Pinned Mode', 'Hidden Mode', 'Switch Anytime'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-64 lg:h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-48 h-48 rounded-full border-2 border-white/20"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute w-36 h-36 rounded-full border-2 border-white/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute w-24 h-24 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm"
                  />
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
