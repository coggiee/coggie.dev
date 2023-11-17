'use client';

import React from 'react';
import styles from 'styles/components/HorizontalProgress.module.scss';

const HorizontalProgress = ({ scroll }: { scroll: string }) => {
  return (
    <div className='w-full fixed top-24 left-0 h-fit z-[99]'>
      <div className={`w-[0%] h-2 bg-[#f7ab0a]`} style={{ width: scroll }} />
    </div>
  );
};

export default HorizontalProgress;
