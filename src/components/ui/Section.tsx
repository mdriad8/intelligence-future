import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'gradient' | 'dark' | 'glass';
}

export function Section({ children, className = '', id, background = 'default' }: SectionProps) {
  const backgrounds = {
    default: 'bg-secondary-50 dark:bg-secondary-950',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-accent-cyan/10 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950',
    dark: 'bg-secondary-900 dark:bg-secondary-950',
    glass: 'glass',
  };

  return (
    <section id={id} className={`section-container safe-area ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, gradient = false, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${gradient ? 'gradient-text' : 'text-secondary-900 dark:text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
