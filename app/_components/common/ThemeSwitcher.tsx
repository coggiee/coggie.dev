"use client";
import IconMoon from "@/app/_icons/IconMoon";
import IconSun from "@/app/_icons/IconSun";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div>
//       The current theme is: {theme}
//       <button onClick={() => setTheme("light")}>Light Mode</button>
//       <button onClick={() => setTheme("dark")}>Dark Mode</button>
//     </div>
//   );
// }
const ThemeSwitcher = () => {
  // const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<IconSun />}
      endContent={<IconMoon />}
      onClick={() => {
        if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }}
    />
  );
  // return (
  //   <div className='cursor-pointer p-2 rounded-xl hover:bg-[#c1c1c12f] dark:bg-inherit'>
  //     <div className='flex justify-center items-center'>
  //       {resolvedTheme === 'dark' ? (
  //         <label className='swap swap-rotate'>
  //           <input
  //             type='checkbox'
  //             className='theme-controller'
  //             value='synthwave'
  //           />
  //           <IconSun
  //             className='swap-on fill-current text-[#ffde49]'
  //             onClick={() => setTheme('dark')}
  //           />
  //           <IconMoon
  //             className='swap-off fill-current text-[#8046ff]'
  //             onClick={() => setTheme('light')}
  //           />
  //         </label>
  //       ) : (
  //         <label className='swap swap-rotate'>
  //           <input
  //             type='checkbox'
  //             className='theme-controller'
  //             value='synthwave'
  //           />
  //           <IconSun
  //             className='swap-on fill-current text-[#ffde49]'
  //             onClick={() => setTheme('dark')}
  //           />
  //           <IconMoon
  //             className='swap-off fill-current text-[#8046ff]'
  //             onClick={() => setTheme('light')}
  //           />
  //         </label>
  //       )}
  //     </div>
  //   </div>
  // );
};

export default ThemeSwitcher;
