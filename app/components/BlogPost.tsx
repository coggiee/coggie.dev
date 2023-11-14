import Link from 'next/link';

interface BlogPostProps {
  date: string;
  title: string;
  description: string;
  slug: string;
}

export const BlogPost = ({ date, title, description, slug }: BlogPostProps) => {
  return (
    <div className=' border-black border-2 m-5'>
      <Link href={`/blog/${slug}`} passHref>
        <div className='font-medium text-xs text-gray-400'>{date}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>
          {description}
        </div>
      </Link>
    </div>
  );
};
