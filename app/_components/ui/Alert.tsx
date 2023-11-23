import IconLink from '@/app/_icons/IconLink';

export const Alert = ({ title }: { title: string }) => {
  return (
    <div
      role='alert'
      className='alert alert-warning w-52 fixed bottom-5 right-5 shadow-lg md:w-96 transition-all ease-in-out duration-1000 p-5 text-xs flex'
    >
      <IconLink />
      <span>{title}</span>
    </div>
  );
};
