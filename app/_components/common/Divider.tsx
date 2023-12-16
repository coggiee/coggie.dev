import { DividerProps } from '@/types/type';
import React from 'react';



const Divider = ({
  isHorizontal,
  bgColor,
  darkBgColor,
  width,
  height,
}: DividerProps) => {
  return (
    <>
      {isHorizontal && (
        <div
          className={`h-[${height}] bg-[${bgColor}] w-full dark:bg-[${darkBgColor}]`}
        />
      )}
      {!isHorizontal && (
        <div
          className={`h-full bg-[${bgColor}] w-[${width}] dark:bg-[${darkBgColor}]`}
        />
      )}
    </>
  );
}

export default Divider;