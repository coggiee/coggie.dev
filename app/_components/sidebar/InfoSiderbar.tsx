'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../hero/HeroSection';

type Props = {};

export default function InfoSiderbar({}: Props) {
  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className='w-full flex flex-col gap-3 flex-shrink-0 '
    >
      <HeroSection src={'/mimoji.png'} />
    </motion.div>
  );
}
