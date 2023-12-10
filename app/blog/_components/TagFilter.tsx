import React from 'react';

type Props = {
  tags: string[];
  handleOnClickTag: (tag: string) => void;
};

export default function TagFilter({ tags, handleOnClickTag }: Props) {
  const [selectedTag, setSelectedTag] = React.useState<string>('');
  const handleOnClick = (tag: string) => {
    setSelectedTag(tag);
    handleOnClickTag && handleOnClickTag(tag);
  };
  
  return (
    <div className='w-full mb-5 p-5 flex flex-col border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white'>
      <div className='w-full flex gap-2 items-center self-start flex-shrink-0 mb-3'>
        <h1 className='text-2xl font-semibold font-sans dark:text-white min-w-fit'>
          Tags
        </h1>
        <div className='h-[1px] bg-[#00000047] w-full dark:bg-[#5d5d5d]'></div>
      </div>
      <ul className='flex flex-grow items-center gap-2 flex-shrink-0 flex-wrap'>
        {tags.map((tag) => (
          <li
            key={tag}
            className={`badge border border-item-border-light cursor-pointer rounded-xl py-5  shadow-md hover:shadow-lg flex-shrink-0 font-thin font-sans text-lg hover:bg-[dodgerblue] hover:text-white transition-all ease-in-out  ${
              selectedTag === tag ? 'bg-[dodgerblue] text-white' : ''
            }} dark:bg-[#5f5f5f2f] dark:text-white dark:hover:text-white dark:hover:bg-[dodgerblue]/50 dark:border-item-border-dark`}
            onClick={() => handleOnClick(tag)}
          >
            <span># {tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
