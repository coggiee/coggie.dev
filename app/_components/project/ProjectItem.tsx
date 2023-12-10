import IconGithub from '@/app/_icons/IconGithub';
import React from 'react';
import Link from 'next/link';
import IconDemo from '@/app/_icons/IconDemo';
import { motion } from 'framer-motion';

type Props = {
  projectTitle: string;
  projectDescription: string;
  projectGithubLink: string;
  projectDemoLink: string;
};

export default function ProjectItem({
  projectTitle,
  projectDescription,
  projectGithubLink,
  projectDemoLink,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-full min-w-0 flex flex-col grow justify-between flex-shrink-0 gap-5 px-3 py-5 rounded-lg cursor-pointer  hover:bg-hover-light dark:hover:bg-hover-dark xl:flex-row xl:items-center'
    >
      <div className='flex flex-col gap-2'>
        <div className='font-semibold text-2xl font-dhurjati'>{projectTitle}</div>
        <div className='text-sm'>{projectDescription}</div>
      </div>
      <div className='flex gap-2 h-fit self-end xl:self-auto'>
        <Link
          href={`${projectGithubLink}`}
          passHref
          target='_blank'
          className='p-2 rounded-full border border-item-border-light dark:border-item-border-dark text-black hover:bg-white hover:text-black dark:hover:text-black dark:text-white'
        >
          <IconGithub />
        </Link>
        <Link
          href={`${projectDemoLink}`}
          passHref
          target='_blank'
          className='p-2 rounded-full border border-item-border-light dark:border-item-border-dark text-black hover:bg-white hover:text-black dark:hover:text-black dark:text-white'
        >
          <IconDemo />
        </Link>
      </div>
    </motion.div>
  );
}
