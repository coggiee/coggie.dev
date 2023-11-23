import { Equipment } from './Equipment';
import { Playlist } from './Playlist';
import { Update } from './Update';

export const Sidebar = () => {
  return (
    <aside className='hidden sticky top-[120px] right-0 flex-grow-0 flex-shrink-0 h-fit basis-1/4 pb-5  md:flex flex-col gap-5 items-center font-lato'>
      <Update />
      <Equipment />
      <Playlist />
    </aside>
  );
};
