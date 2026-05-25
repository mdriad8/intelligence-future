import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = false, glass = false, onClick }: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  const hoverStyles = hover ? 'hover:-translate-y-2 hover:shadow-2xl cursor-pointer' : '';
  const glassStyles = glass ? 'glass-card' : 'bg-white dark:bg-secondary-800 shadow-lg border border-secondary-100 dark:border-secondary-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
