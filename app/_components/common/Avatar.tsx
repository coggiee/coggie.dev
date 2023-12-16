import { AvatarProps } from '@/types/type';
import Image from 'next/image';

const Avatar = ({ src, width = 28, height = 28 }: AvatarProps) => {
  return (
    <div className='avatar online'>
      <div
        className={`w-28 h-28 relative rounded-full border border-item-border-light dark:border-item-border-dark`}
      >
        <Image
          src={src}
          layout='fill'
          objectFit='cover'
          alt='프로필 이미지'
          className='absolute rounded-full m-0'
        />
      </div>
    </div>
  );
};

export default Avatar;