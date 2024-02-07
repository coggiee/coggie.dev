'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DashboardSection() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: 'spring',
          stiffness: 200,
        },
      }}
      className='w-52 h-full flex flex-col justify-center gap-5 px-5 shadow-lg backdrop-blur-md items-center'
    >
      <Button
        as={Link}
        href='/blog'
        variant='ghost'
        radius='lg'
        className='w-10'
      >
        Blog
      </Button>
      <Button
        as={Link}
        href='/blog'
        variant='ghost'
        radius='lg'
        isDisabled
        className='w-10'
      >
        Journey
      </Button>
    </motion.div>
  );
}
