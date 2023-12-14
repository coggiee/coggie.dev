import IconLink from '@/app/_icons/IconLink';

interface AlertProps {
  title: string;
  bgColor: string;
}
export const Alert = ({ title, bgColor = 'dodgerblue' }: AlertProps) => {
  return (
    <div className='toast toast-end z-[999]'>
      <div
        role='alert'
        className={`alert border-none bg-[${bgColor}] w-52 shadow-lg md:w-96 transition-all ease-in-out duration-1000 p-5 text-xs flex`}
      >
        <IconLink />
        <span>{title}</span>
      </div>
    </div>
  );
};
