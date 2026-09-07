'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  color?: 'black' | 'white' | 'purple';
  showNotch?: boolean;
}

const phoneColors = {
  black: 'bg-neutral-900 border-neutral-800',
  white: 'bg-white border-neutral-200',
  purple: 'bg-gradient-to-br from-primary-900 to-secondary-900 border-primary-800',
};

export function PhoneMockup({
  children,
  className,
  color = 'black',
  showNotch = true,
}: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('relative', className)}
    >
      {/* Phone frame */}
      <div
        className={cn(
          'relative w-[280px] h-[580px] rounded-[40px] border-[3px] shadow-2xl overflow-hidden',
          phoneColors[color]
        )}
      >
        {/* Screen */}
        <div className="absolute inset-[3px] rounded-[37px] overflow-hidden bg-white dark:bg-neutral-950">
          {/* Status bar */}
          {/* <div className="h-12 flex items-center justify-between px-6 bg-white dark:bg-neutral-950">
            <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
              9:41
            </span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2.5 rounded-sm bg-neutral-900 dark:bg-neutral-100" />
              <div className="w-3 h-2.5 rounded-sm bg-neutral-900 dark:bg-neutral-100" />
              <div className="w-6 h-3 rounded-sm border border-neutral-900 dark:border-neutral-100">
                <div className="w-4 h-full rounded-sm bg-neutral-900 dark:bg-neutral-100 m-0.5" />
              </div>
            </div>
          </div> */}

          {/* Notch */}
          {showNotch && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-neutral-900 dark:bg-neutral-950 rounded-b-2xl" />
          )}

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
      </div>

      {/* Reflection/shadow */}
      <div className="absolute -inset-4 bg-gradient-to-b from-primary-500/10 to-secondary-500/10 rounded-[50px] blur-2xl -z-10" />
    </motion.div>
  );
}

export interface PhoneScreenProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneScreen({ children, className }: PhoneScreenProps) {
  return (
    <div className={cn('p-4 h-full', className)}>
      {children}
    </div>
  );
}
