import { formatDate } from '@/utils/formatDate';
import Link from 'next/link';
import { Tag } from './Tag';

interface PostCardProps {
  date: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
}

export const PostCard = ({
  date,
  title,
  description,
  path,
  tags,
}: PostCardProps) => {
  return (
    <div className='border-b-2 m-2 p-5 drop-shadow-md shadow-md rounded-lg'>
      <Link href={`/blog/${path}`} passHref className='flex flex-col gap-2'>
        <div className='font-medium text-xs text-gray-400'>
          {formatDate(date)}
        </div>
        <div className='text-2xl'>{title}</div>
        <div className='font-light text-ellipsis overflow-hidden whitespace-nowrap'>{description}</div>
        <div className='flex gap-3 text-sm'>
          {tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
        </div>
      </Link>
    </div>
  );
};
