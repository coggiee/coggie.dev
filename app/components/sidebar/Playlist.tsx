// 'node-youtube-music' only works on server side
import IconYoutubemusic from '@/app/Icons/IconYoutubeMusic';
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
    <div className='flex flex-col justify-start gap-2 h-full  relative border-[1px] p-3 pt-0 rounded-2xl shadow-lg'>
      <header className='sticky top-0 left-0 bg-white pb-3 pt-3'>
        <h4 className='flex gap-1 items-center font-mono'>
          <span>Playlist</span>
          <IconYoutubemusic className='text-xs text-[#9a9a9a]' />
        </h4>
      </header>
      <main className='h-40 p-3 pt-0 overflow-y-scroll overscroll-none'>
        {playlist.map((item) => (
          <div
            key={item.title}
            className='max-w-full pb-2 mb-2 text-xs text-gray-400 break-words overflow-hidden text-ellipsis border-b-gray-100 border-b-[1px]'
          >
            {item.title}
          </div>
        ))}
      </main>
    </div>
    // <div className='collapse collapse-arrow font-mono'>
    //   <input type='checkbox' />
    //   <div className='collapse-title'>
    //     <h4 className='text-base font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f7ab0a]/80 relative inline-block'>
    //       <span className='relative text-white'>Playlist</span>
    //     </h4>
    //   </div>
    //   <div className='collapse-content h-52 overflow-y-scroll'>
    //     {playlist.map((item) => (
    //       <div
    //         key={item.title}
    //         className='max-w-full pb-2 mb-2 text-xs text-gray-400 break-words overflow-hidden text-ellipsis border-b-gray-200 border-b-[1px]'
    //       >
    //         {item.title}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};
