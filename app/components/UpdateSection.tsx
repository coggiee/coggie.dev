import { updateList } from '../data/updateList';

export const UpdateSection = () => {
  return (
    <aside className='sticky top-[120px] right-0 flex-grow-0 flex-shrink-0 w-auto h-fit basis-1/4 p-3 border-b-2 border-[#f7ab0a]/50'>
      <h4 className='text-base font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f7ab0a]/80 relative inline-block'>
        <span className='relative text-white'>업데이트 예정</span>
      </h4>
      <ul className='text-gray-700'>
        {updateList.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </aside>
  );
};
