import Image from 'next/image';

type AvatarProps = {
  src: string;
  width?: number;
  height?: number;
};
export const Avatar = ({ src, width = 28, height = 28 }: AvatarProps) => {
  return (
    <div className='avatar online'>
      <div
        className={`w-${width} h-${height} relative rounded-full border border-item-border-light dark:border-item-border-dark`}
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
