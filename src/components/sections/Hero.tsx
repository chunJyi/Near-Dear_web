'use client';

import { motion } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { MapPin, Users, Shield, ArrowRight, Download } from 'lucide-react';

const floatingElements = [
  { icon: MapPin, x: -60, y: 40, delay: 0 },
  { icon: Users, x: 280, y: -20, delay: 0.5 },
  { icon: Shield, x: 300, y: 400, delay: 1 },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-neutral-50 via-primary-50/30 to-secondary-50/30 dark:from-neutral-950 dark:via-primary-950/30 dark:to-secondary-950/30"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-800/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-100/10 to-secondary-100/10 dark:from-primary-900/5 dark:to-secondary-900/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 shadow-sm border border-neutral-200 dark:border-neutral-800">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  v1.2.1 — Now Available
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                Near<span className="text-primary-500">&</span>Dear
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Stay Close to the Ones You Love
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed"
            >
              Share your live location with the people who matter most — and stay in control of exactly who sees it.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://gofile.io/d/cTuUuJQB"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-colors duration-200 shadow-lg shadow-primary-500/30"
              >
                <Download className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-xs text-white/80">DOWNLOAD NOW</div>
                  <div className="text-sm font-semibold text-white">Android APK</div>
                </div>
              </motion.a>

              <Button
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() => scrollToElement('features')}
              >
                Learn More
              </Button>
            </motion.div>

            {/* Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Shield className="w-4 h-4 text-primary-500" />
                <span>You control who sees your location</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <PhoneMockup color="black" className="relative z-10">
              <div className="w-full h-full">
                <img
                  src="/images/home.jpg"
                  alt="Near&Dear App Screenshot home"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhoneMockup>

            {/* Floating Elements */}
            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: element.delay,
                }}
                className="absolute hidden lg:flex"
                style={{ left: element.x, top: element.y }}
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
                  <element.icon className="w-6 h-6 text-primary-500" />
                </div>
              </motion.div>
            ))}

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
