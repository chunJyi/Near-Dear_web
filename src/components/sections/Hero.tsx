'use client';

import { motion } from 'framer-motion';
import { cn, scrollToElement } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { MapPin, Navigation, Users, Shield, ArrowRight, Star } from 'lucide-react';

const trustUsers = [
  { color: 'bg-primary-500' },
  { color: 'bg-secondary-500' },
  { color: 'bg-green-500' },
  { color: 'bg-orange-500' },
  { color: 'bg-pink-500' },
];

const floatingElements = [
  { icon: MapPin, x: -60, y: 40, delay: 0 },
  { icon: Navigation, x: 280, y: -20, delay: 0.5 },
  { icon: Shield, x: 300, y: 400, delay: 1 },
  { icon: Users, x: -80, y: 350, delay: 1.5 },
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
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Location Tracking Made Simple
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
                Stay Connected
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Stay Safe
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed"
            >
              LocateMe helps you share real-time location with your loved ones
              and track what matters most. Because their safety is your peace of mind.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Google Play Button */}
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-neutral-900 dark:bg-white rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200"
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
                    GET IT ON
                  </div>
                  <div className="text-sm font-semibold text-white dark:text-neutral-900">
                    Google Play
                  </div>
                </div>
              </motion.a>

              {/* Learn More Button */}
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
              <div className="flex -space-x-2">
                {trustUsers.map((user, index) => (
                  <div
                    key={index}
                    className={cn(
                      'w-10 h-10 rounded-full border-2 border-white dark:border-neutral-950 flex items-center justify-center',
                      user.color
                    )}
                  >
                    <span className="text-xs font-semibold text-white">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Trusted by <span className="font-semibold text-neutral-900 dark:text-neutral-100">1,000+</span> users
                </p>
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
            {/* Phone Mockup */}
            <PhoneMockup color="black" className="relative z-10">
              <div className="w-full h-full">
                <img
                  src="/Near-Dear_web/images/home.jpg"
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
                  <element.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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
