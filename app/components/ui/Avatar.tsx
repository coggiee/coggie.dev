import Image from 'next/image';
import Link from 'next/link';

export const Avatar = () => {
  return (
    <div className='avatar flex items-center'>
      <div className='w-9 rounded-full ring ring-[#f7ab0a] ring-offset-base-100 ring-offset-2 relative'>
        <Link href='/'>
          <Image
            src='/profile.jpg'
            alt='logo_image'
            layout='fill'
            className='rounded-full shadow-md drop-shadow-md absolute'
          />
        </Link>
      </div>
    </div>
  );
};
