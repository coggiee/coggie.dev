import IconLink from '@/app/Icons/IconLink';

export const CopyAlert = () => {
  return (
    <div
      role='alert'
      className='alert alert-warning w-52 fixed bottom-5 right-5 shadow-lg md:w-96 transition-all ease-in-out duration-1000 p-5 text-xs flex'
    >
      <IconLink />
      <span>링크가 복사되었습니다.</span>
    </div>
  );
};
