'use client';
import IconMoon from '@/app/_icons/IconMoon';
import IconSun from '@/app/_icons/IconSun';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <div
      className='tooltip tooltip-bottom cursor-pointer p-2 rounded-xl hover:bg-[#c1c1c12f] dark:bg-inherit'
      data-tip='theme'
    >
      <div className='flex justify-center items-center'>
        {resolvedTheme === 'dark' ? (
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              className='theme-controller'
              value='synthwave'
            />
            <IconSun
              className='swap-on fill-current text-[#ffde49]'
              onClick={() => setTheme('dark')}
            />
            <IconMoon
              className='swap-off fill-current text-[#8046ff]'
              onClick={() => setTheme('light')}
            />
          </label>
        ) : (
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              className='theme-controller'
              value='synthwave'
            />
            <IconSun
              className='swap-on fill-current text-[#ffde49]'
              onClick={() => setTheme('dark')}
            />
            <IconMoon
              className='swap-off fill-current text-[#8046ff]'
              onClick={() => setTheme('light')}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
