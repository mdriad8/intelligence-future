import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  title?: string;
  description?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  start = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  title,
  description,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, start, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-center ${className}`}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      {title && (
        <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 dark:text-white mb-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-secondary-600 dark:text-secondary-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
