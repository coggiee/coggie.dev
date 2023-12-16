import { MotionVerticalProviderProps } from '@/types/type';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export default function MotionVerticalProvider({
  children,
  duration,
  fromY,
  toY,
  className,
}: MotionVerticalProviderProps) {
  return (
    <AnimatePresence>
      <motion.section
        initial={{
          y: fromY,
          opacity: 0,
        }}
        animate={{
          y: toY,
          opacity: 1,
        }}
        transition={{
          duration: duration,
        }}
        exit={{ opacity: 0, y: fromY }}
        className={className}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
