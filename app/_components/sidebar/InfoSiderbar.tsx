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
        duration: .7,
      }}
    >
      <div className='sticky top-[120px] left-0 w-full flex flex-col gap-3 flex-shrink-0'>
        <Hero src={'/profile2.jpg'} />
        {/* <Sidebar /> */}
      </div>
    </motion.div>
  );
}
