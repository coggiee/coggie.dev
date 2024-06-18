'use client';

import React from 'react';
import { MotionVerticalProviderProps } from '@/types/type';
import { AnimatePresence, motion } from 'framer-motion';

export default function MotionVerticalProvider({
  children,
  duration,
  delay,
  fromY,
  toY,
  className,
}: MotionVerticalProviderProps) {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ y: fromY, opacity: 0 }}
        animate={{
          y: toY,
          opacity: 1,
          transition: {
            duration: duration,
            delay: delay,
            type: 'spring',
            stiffness: 200,
          },
        }}
        className={className}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
