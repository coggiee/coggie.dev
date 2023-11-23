import Link from 'next/link';
import { Tag } from '../ui/Tag';
import IconBxCalendarStar from '../../_icons/IconBxCalendarStar';
import IconTimerSand from '../../_icons/IconTimerSand';
interface PostCardProps {
  date: string;
  time: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  readTimeMinutes: string;
}

export const PostCard = ({
  date,
  time,
  title,
  description,
  path,
  tags,
  readTimeMinutes,
}: PostCardProps) => {
  return (
    <div className='card rounded-none rounded-e-lg shadow-md font-notosanskr hover:scale-105 duration-300 m-2 dark:text-white border-l-4 border-[#f7ab0a]'>
      <div className='card-body p-3 px-5'>
        <Link href={`/blog/${path}`} passHref className='flex flex-col gap-2'>
          <div className='font-medium text-xs text-gray-700 flex gap-2 items-center dark:text-white'>
            <IconBxCalendarStar />
            {date}
          </div>
          <div className='font-medium text-xs text-gray-700 flex gap-1 items-center dark:text-white'>
            <IconTimerSand />
            {time} - {readTimeMinutes} min read
          </div>
          <h2 className='text-xl w-full break-words'>{title}</h2>
          <div className='font-thin w-full text-ellipsis overflow-hidden whitespace-nowrap font-mono mb-5'>
            {description}
          </div>
          <div className='card-actions justify-start'>
            {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
          </div>
        </Link>
      </div>
    </div>
  );
};
