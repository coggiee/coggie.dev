import IconLink from '@/app/_icons/IconLink';

export const Alert = ({ title }: { title: string }) => {
  return (
    <div className='toast toast-end'>
      <div
        role='alert'
        className='alert alert-warning w-52  shadow-lg md:w-96 transition-all ease-in-out duration-1000 p-5 text-xs flex'
      >
        <IconLink />
        <span>{title}</span>
      </div>
    </div>
  );
};
