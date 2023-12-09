import { Equipment } from './Equipment';
import { Playlist } from './Playlist';
import { Update } from './Update';

export const Sidebar = () => {
  return (
    <aside className='hidden pb-5 md:flex flex-col gap-3'>
      <div className='border-b border-b-item-border-light pb-5 dark:border-b-item-border-dark'>
        <h1 className='font-bold mb-3'>Bio</h1>
        <ul className='font-thin text-sm'>
          <li>2023.09 ~ 2024.03 Devcourse frontend</li>
          <li>2018.03 ~ 2024.02 Konkuk Univ. Computer Science</li>
        </ul>
      </div>
      <Update />
      <Equipment />
    </aside>
  );
};
