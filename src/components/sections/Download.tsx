'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MapPin, Shield, Zap, Heart } from 'lucide-react';

const features = [
  { icon: Zap, text: 'Real-time tracking' },
  { icon: Shield, text: 'End-to-end encrypted' },
  { icon: Heart, text: 'Family-first design' },
];

export function Download() {
  return (
    <section
      id="download"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950/30 dark:via-neutral-950 dark:to-secondary-950/30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDE0em0wLTR2Mkg4VjI4aDI4ek0xNiA0MHYySDh2LTJoOHptMTItMTB2Mkg4VjI4aDIweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 shadow-2xl"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 to-secondary-500 p-[1px]">
              <div className="h-full w-full rounded-3xl bg-white dark:bg-neutral-900" />
            </div>

            <div className="relative p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  {/* App Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                      Download{' '}
                      <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                        LocateMe
                      </span>
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                      Stay connected with what matters most. Available for free on Google Play.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Store Badges */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Direct APK Download */}
                    <motion.a
                      href="https://github.com/chunJyi/Near-Dear_web/releases/download/V1/Near.Dear_D.apk"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-colors duration-200 shadow-lg shadow-primary-500/30"
                    >
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-white/80">
                          DOWNLOAD NOW
                        </div>
                        <div className="text-sm font-semibold text-white">
                          Android APK
                        </div>
                      </div>
                    </motion.a>

                    {/* Google Play (Coming Soon) */}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200 opacity-75"
                    >
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"
                          fill="#EA4335"
                        />
                        <path
                          d="M16.296 15.428L13.792 12l2.504-3.428 4.078 2.34c.694.4.694 1.36 0 1.76l-4.078 2.34z"
                          fill="#FBBC04"
                        />
                        <path
                          d="M16.296 15.428L13.792 12 3.61 1.814l10.182 10.186 2.504 3.428z"
                          fill="#4285F4"
                        />
                        <path
                          d="M16.296 8.572L3.61 22.186l12.686-10.186-2.504-3.428z"
                          fill="#34A853"
                        />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-neutral-400 dark:text-neutral-500">
                          Coming Soon
                        </div>
                        <div className="text-sm font-semibold text-white dark:text-neutral-900">
                          Google Play
                        </div>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Right Content - Illustration */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative hidden lg:flex justify-center"
                >
                  <div className="relative w-80 h-80">
                    {/* Background circles */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-800/20 dark:to-secondary-800/20"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-300 to-secondary-300 dark:from-primary-700/20 dark:to-secondary-700/20"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.5, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 dark:from-primary-600/20 dark:to-secondary-600/20"
                    />

                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center shadow-xl shadow-primary-500/30"
                      >
                        <MapPin className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-8 right-8"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute bottom-12 left-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center">
                        <Heart className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ x: [0, 10, 0], y: [0, 15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                      className="absolute top-12 left-0"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-orange-500" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
