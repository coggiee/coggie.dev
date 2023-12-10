'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SearchBarXS from '../common/SearchBarXS';
import ProjectList from '../project/ProjectList';
import MorePostLink from '../common/MorePostLink';

export default function RightSidebar() {
  return (
    <motion.aside
      initial={{
        x: 500,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className='w-full flex flex-col gap-5 flex-shrink-0'
    >
      <SearchBarXS />
      <div className='hidden md:block xl:hidden'>
        <MorePostLink />
      </div>
      <ProjectList />
    </motion.aside>
  );
}
