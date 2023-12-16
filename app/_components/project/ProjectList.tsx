import { Project } from '@/app/_data/project';
import React from 'react';
import ProjectItem from './ProjectItem';

export default function ProjectList() {
  return (
    <div className='w-full min-w-0 flex flex-col justify-center gap-3 font-inter flex-shrink-0 p-3 border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white '>
      <h1 className='ml-2 font-bold text-4xl font-dhurjati'>Featured Projects</h1>
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
