import { MotionHorizontalProviderProps } from '@/types/type';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export default function MotionHorizontalProvider({
  children,
  duration,
  fromX,
  toX,
  className,
}: MotionHorizontalProviderProps) {
  return (
    <AnimatePresence>
      <motion.aside
        initial={{
          x: fromX,
          opacity: 0,
        }}
        animate={{
          x: toX,
          opacity: 1,
        }}
        transition={{
          duration: duration,
        }}
        className={className}
      >
        {children}
      </motion.aside>
    </AnimatePresence>
  );
}
