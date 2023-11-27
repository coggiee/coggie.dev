export const Tag = ({ tag }: { tag: string }) => {
  return <div className='badge border border-[#7e7e7ea8] cursor-pointer rounded-lg py-3 dark:bg-[#c1c1c12f] dark:text-white flex items-center sm:self-end'>
    <span># {tag}</span>
  </div>;
};
