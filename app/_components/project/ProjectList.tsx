import { Project } from '@/app/_data/project';
import React from 'react';
import ProjectItem from './ProjectItem';

type Props = {};

export default function ProjectList({}: Props) {
  return (
    <div className='w-full min-w-0 flex flex-col justify-center gap-7 flex-shrink-0 p-7 border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white '>
      <h1 className='font-bold text-2xl'>Featured Projects</h1>
      {Project.map((item) => (
        <ProjectItem
          key={item.title}
          projectTitle={item.title}
          projectDescription={item.description}
          projectGithubLink={item.githubLink}
          projectDemoLink={item.demoLink}
        />
      ))}
    </div>
  );
}
