// 'node-youtube-music' only works on server side
import IconYoutubemusic from '@/app/_icons/IconYoutubemusic';
import { listMusicsFromPlaylist, searchPlaylists } from 'node-youtube-music';

async function getPlaylist() {
  const playlist = await listMusicsFromPlaylist(
    'PLt5DxT918imMXPDYVg7k7NRp-PuQQeBmq'
  );
  return playlist;
}
export const Playlist = async () => {
  const playlist = await getPlaylist();

  return (
    <div className='collapse collapse-arrow rounded-lg border border-item-border-light bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-[#fff]'>
      <input type='checkbox' />
      <div className='collapse-title'>
        <h4 className='text-base relative inline-flex gap-2 items-center'>
          <span className='relative font-bold'>Playlist</span>
          <IconYoutubemusic className='text-xs text-[#9a9a9a]' />
        </h4>
      </div>
      <div className='collapse-content'>
        <div className='h-60 overflow-y-scroll overscroll-y-none'>
          {playlist.map((item) => (
            <div
              key={item.title}
              className='max-w-full pb-2 mb-2 text-xs text-gray-400 break-words overflow-hidden text-ellipsis border-b-gray-100 border-b-[1px] dark:border-[#53535397]'
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
