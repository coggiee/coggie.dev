import Image from 'next/image';

type AvatarProps = {
  src: string;
};
export const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className='avatar online'>
      <div className='w-28 h-28 relative rounded-full'>
        <Image
          src={src}
          layout='fill'
          objectFit='contain'
          alt='프로필 이미지'
          className='absolute rounded-full grayscale'
        />
      </div>
    </div>
  );
};
