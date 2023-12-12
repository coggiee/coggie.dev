import { Equipment } from './Equipment';
import { Playlist } from './Playlist';
import { Update } from './Update';

export const Sidebar = () => {
  return (
    <aside className='hidden pb-5 md:flex flex-col gap-3'>
      <Update />
      <Equipment />
      <Playlist />
    </aside>
  );
};
