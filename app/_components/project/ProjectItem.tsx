import IconGithub from '@/app/_icons/IconGithub';
import React from 'react';
import Link from 'next/link';
import IconDemo from '@/app/_icons/IconDemo';
import { ProjectItemProps } from '@/types/type';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react';

export default function ProjectItem({
  projectTitle,
  projectDescription,
  projectGithubLink,
  projectDemoLink,
}: ProjectItemProps) {
  return (
    <Card
      isFooterBlurred
      isBlurred
      isHoverable
      shadow='lg'
      radius='lg'
      className='relative w-full h-36 min-w-0 grow flex-shrink-0 gap-5 cursor-pointer'
    >
      <CardHeader className='flex flex-col gap-2 text-white absolute top-0 left-0 z-50'>
        <div className='w-full font-semibold text-xl font-dhurjati text-left'>
          {projectTitle}
        </div>
        <div className='w-full text-xs'>{projectDescription}</div>
      </CardHeader>
      <CardBody className='p-0'>
        <Image
          alt='project-image'
          className='object-cover grayscale'
          height='100%'
          width='100%'
          src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
        />
      </CardBody>
      <CardFooter className='px-0 mx-2 gap-2 before:bg-white/10 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_15px)] shadow-small z-10'>
        <Button
          as={Link}
          href={`${projectGithubLink}`}
          variant='light'
          radius='full'
          isIconOnly
          aria-label='github'
          className='border-none'
        >
          <IconGithub />
        </Button>
        <Button
          as={Link}
          href={`${projectDemoLink}`}
          variant='light'
          radius='full'
          isIconOnly
          aria-label='demo'
          className='border-none'
        >
          <IconDemo />
        </Button>
      </CardFooter>
    </Card>
  );
}
