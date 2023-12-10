'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SearchBarXS from '../common/SearchBarXS';
import ProjectList from '../project/ProjectList';

export default function RightSidebar() {
  return (
    <motion.div
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
    >
      <aside className='w-full flex flex-col gap-5 flex-shrink-0 sticky top-[120px] right-0'>
        <SearchBarXS />
        <ProjectList />
      </aside>
    </motion.div>
  );
}
