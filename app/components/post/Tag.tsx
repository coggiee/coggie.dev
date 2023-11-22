export const Tag = ({ tag }: { tag: string }) => {
  return <div className='badge badge-neutral cursor-pointer rounded-lg py-3 dark:bg-[#c1c1c12f] dark:text-white  border-none flex items-center'>
    <span>{tag}</span>
  </div>;
};
