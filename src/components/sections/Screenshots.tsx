'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PhoneMockup, PhoneScreen } from '@/components/ui/PhoneMockup';
import { ChevronLeft, ChevronRight, MapPin, Users, Settings, Radio } from 'lucide-react';

const screenshots = [
  {
    id: 'home',
    title: 'Home Screen',
    description: 'Location toggle and friends carousel — your control center.',
    icon: MapPin,
    gradient: 'from-primary-400 to-primary-500',
    image: '/images/home.jpg',
  },
  {
    id: 'friends',
    title: 'Friends Screen',
    description: 'Search, add friends, manage requests, and mark favorites.',
    icon: Users,
    gradient: 'from-success to-emerald-500',
    image: '/images/live.jpg',
  },
  {
    id: 'friend-detail',
    title: 'Friend Detail',
    description: 'Switch sharing mode per friend — Live, Pinned, or Hidden.',
    icon: Radio,
    gradient: 'from-warning to-amber-500',
    image: '/images/family.jpg',
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Dark mode, distance slider, and app preferences.',
    icon: Settings,
    gradient: 'from-neutral-400 to-slate-500',
    image: '/images/settings.jpg',
  },
];

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, []);

  const handlePrev = () => {
    stopAutoPlay();
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
    startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    startAutoPlay();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="screenshots"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          title="See Near&Dear in"
          highlight="Action"
          description="Explore the intuitive interface designed for simplicity and ease of use."
        />

        {/* Screenshots Carousel */}
        <div className="mt-16 relative">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Phone Mockup */}
            <div className="relative">
              <PhoneMockup color="black">
                <PhoneScreen>
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-full h-full"
                    >
                      <img
                        src={screenshots[activeIndex].image}
                        alt={screenshots[activeIndex].title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </motion.div>
                  </AnimatePresence>
                </PhoneScreen>
              </PhoneMockup>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Screenshot Info */}
            <div className="lg:max-w-sm space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary-200 dark:ring-primary-800">
                    <img
                      src={screenshots[activeIndex].image}
                      alt={screenshots[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {screenshots[activeIndex].title}
                    </h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                      {screenshots[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      index === activeIndex
                        ? 'w-8 bg-primary-500'
                        : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
                    )}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>

              {/* Thumbnail Navigation */}
              <div className="hidden lg:flex flex-col gap-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      stopAutoPlay();
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                      startAutoPlay();
                    }}
                    className={cn(
                      'flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200',
                      index === activeIndex
                        ? 'bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800'
                        : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    )}
                  >
                    <div className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden',
                      index === activeIndex
                        ? 'ring-2 ring-primary-500'
                        : ''
                    )}>
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className={cn(
                        'text-sm font-medium',
                        index === activeIndex
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-neutral-700 dark:text-neutral-300'
                      )}>
                        {screenshot.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
