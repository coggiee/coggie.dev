import Link from 'next/link';
import { Tag } from '../ui/Tag';
import IconBxCalendarStar from '../../_icons/IconBxCalendarStar';
import IconTimerSand from '../../_icons/IconTimerSand';
import { CoverImage } from '@/types/type';
import Image from 'next/image';
interface PostCardProps {
  date: string;
  time: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  coverImage?: CoverImage;
  readTimeMinutes: string;
}

export const PostCard = ({
  date,
  time,
  title,
  description,
  path,
  tags,
  coverImage,
  readTimeMinutes,
}: PostCardProps) => {
  return (
    <div className='card rounded-none rounded-e-lg shadow-md font-notosanskr hover:scale-105 duration-300 m-2 dark:text-white border-l-4 border-[dodgerblue]'>
      <div className='card-body p-3 px-5'>
        <Link
          href={`/blog/${path}`}
          passHref
          className='flex flex-col-reverse sm:flex-row sm:justify-between gap-5'
        >
          <div className='flex flex-col gap-2 basis-40 sm:basis-80'>
            <div className='font-medium text-xs text-gray-700 flex gap-2 items-center dark:text-white'>
              <IconBxCalendarStar />
              {date}
            </div>
            <div className='font-medium text-xs text-gray-700 flex gap-1 items-center dark:text-white'>
              <IconTimerSand />
              {time} - {readTimeMinutes} min read
            </div>
            <h2 className='text-xl w-full break-words'>{title}</h2>
            <div className='font-thin w-full text-ellipsis overflow-hidden whitespace-wrap font-mono mb-5'>
              {description}
            </div>
            <div className='card-actions sm:flex-grow sm:justify-items-end'>
              {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
            </div>
          </div>
          {coverImage && (
            <div className='relative w-full sm:w-1/3 h-64 max-h-full flex-shrink-0'>
              <Image
                src={coverImage.url}
                alt={coverImage.fileName}
                layout='fill'
                objectFit='cover'
                className='absolute rounded-lg'
              />
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};
