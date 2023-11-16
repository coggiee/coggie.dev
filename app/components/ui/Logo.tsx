import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div className='flex items-center'>
      <Link href='/'>
        <Image
          src='/profile.jpg'
          alt='logo_image'
          width={50}
          height={50}
          className='rounded-full shadow-md drop-shadow-md'
        />
      </Link>
    </div>
  );
};
