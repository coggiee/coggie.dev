'use client';

import React from 'react';
import { Hero } from '../hero/Hero';
import { Sidebar } from './Sidebar';
import { motion } from 'framer-motion';

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
      className='w-full flex flex-col gap-3 flex-shrink-0 xl:sticky xl:top-[120px] xl:left-0'
    >
      <Hero src={'/profile2.jpg'} />
      {/* <Sidebar /> */}
    </motion.div>
  );
}
