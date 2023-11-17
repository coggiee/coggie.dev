import { Equipment } from './Equipment';
import { Update } from './Update';

export const Sidebar = () => {
  return (
    <aside className='hidden sticky top-[120px] right-0 flex-grow-0 flex-shrink-0 w-auto h-fit basis-1/4 p-3 border-b-2 border-[#f7ab0a]/50 md:flex flex-col gap-5 items-center'>
      <Update />
      <Equipment />
    </aside>
  );
};
