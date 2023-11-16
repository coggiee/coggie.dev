import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import { Tag } from './Tag';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import IconBxCalendarStar from '../../Icons/IconBxCalendarStar';
import IconTimerSand from '../../Icons/IconTimerSand';
interface PostCardProps {
  date: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  readTimeMinutes: string;
}

export const PostCard = ({
  date,
  title,
  description,
  path,
  tags,
  readTimeMinutes,
}: PostCardProps) => {
  return (
    <div className='border-b-2 border-[#f7ab0a] m-2 p-5 shadow-md rounded-lg font-mono hover:scale-105 duration-300'>
      <Link href={`/blog/${path}`} passHref className='flex flex-col gap-2'>
        <div className='font-medium text-xs text-gray-400 flex gap-2 items-center'>
          <IconBxCalendarStar />
          {formatDate(date)} /{' '}
          {format(parseISO(date), 'cccc LLLL d, yyyy', { locale: ko })}
        </div>
        <div className='font-medium text-xs text-gray-400 flex gap-1 items-center'>
          <IconTimerSand />
          {readTimeMinutes.split(' ').slice(0, 2).join(' ')}
        </div>
        <div className='text-xl w-full break-words'>{title}</div>
        <div className='font-light w-full text-ellipsis overflow-hidden whitespace-nowrap'>
          {description}
        </div>
        <div className='flex gap-3 text-sm'>
          {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
        </div>
      </Link>
    </div>
  );
};
