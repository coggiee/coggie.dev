import Link from 'next/link';
import IconPrevBlog from './_icons/IconPrevBlog';
import IconReturnBack from './_icons/IconReturnBack';

export default function NotFound() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <h2 className='font-thin font-mono text-4xl'>
          누군가 페이지를 잡아 먹었어요!
        </h2>
        <button className='border p-3 rounded-lg flex items-center gap-3 shadow-md drop-shadow-lg animate-bounce hover:shadow-lg font-thin font-mono'>
          <Link href='/'>돌아가기</Link>
          <IconReturnBack />
        </button>
      </div>
    </div>
  );
}
