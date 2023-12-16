import React from 'react';

interface DividerProps {
  isHorizontal: boolean;
  bgColor: string;
  darkBgColor: string;
  width?: 'full' | string;
  height?: 'full' | string;
}

export default function Divider({
  isHorizontal,
  bgColor,
  darkBgColor,
  width,
  height,
}: DividerProps) {
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
