'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const cardVariants = {
  default: 'bg-white dark:bg-neutral-900 shadow-card',
  elevated: 'bg-white dark:bg-neutral-900 shadow-lg',
  outlined: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800',
  glass: 'bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-white/30 dark:border-neutral-800/30',
};

const cardPadding = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  variant = 'default',
  hover = true,
  padding = 'md',
  className,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-2xl transition-all duration-200',
        cardVariants[variant],
        cardPadding[padding],
        hover && 'hover:shadow-cardHover cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export interface CardHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function CardHeader({
  title,
  description,
  icon,
  className,
}: CardHeaderProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({
  children,
  className,
}: CardContentProps) {
  return (
    <div className={cn('mt-4', className)}>
      {children}
    </div>
  );
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({
  children,
  className,
}: CardFooterProps) {
  return (
    <div
      className={cn(
        'mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800',
        className
      )}
    >
      {children}
    </div>
  );
}
