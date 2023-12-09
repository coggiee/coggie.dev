const Badge = ({ text }: { text: string }) => (
  <span className='badge h-6 font-thin rounded-md cursor-pointer border border-item-border-light flex justify-center items-center bg-sub-light dark:text-[white] dark:bg-sub-dark dark:border-item-border-dark '>
    {text}
  </span>
);

export default Badge;
