'use client';

import IconChevronRight from '@/app/Icons/IconChevronRight';
import { Toc } from '@/types/type';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const numberToStringMap = {
  1: 'one',
  2: 'two',
  3: 'three',
};

const getScrollTop = () => {
  if (!document.body) return 0;
  if (document.documentElement && 'scrollTop' in document.documentElement) {
    return document.documentElement.scrollTop || document.body.scrollTop;
  } else {
    return document.body.scrollTop;
  }
};

interface IHeadingTops {
  slug: string;
  top: number;
}

interface TocSideProps {
  tableOfContents: Toc[];
}

export const TocSidebar = ({ tableOfContents }: TocSideProps) => {
  const [activeToc, setActiveToc] = useState('');
  const [headingTops, setHeadingTops] = useState<null | IHeadingTops[]>([]);

  const settingHeadingTops = useCallback(() => {
    const scrollTop = getScrollTop();
    const headingTops = tableOfContents.map(({ slug }) => {
      const el = document.getElementById(slug);
      const top = el ? el.getBoundingClientRect().top + scrollTop : 0;
      return { slug, top };
    });
    setHeadingTops(headingTops);
  }, [tableOfContents]);

  useEffect(() => {
    settingHeadingTops();
    let prevScrollHeight = document.body.scrollHeight;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const trackScrollHeight = () => {
      const scrollHeight = document.body.scrollHeight;
      if (prevScrollHeight !== scrollHeight) {
        settingHeadingTops();
      }
      prevScrollHeight = scrollHeight;
      timeoutId = setTimeout(trackScrollHeight, 250);
    };

    timeoutId = setTimeout(trackScrollHeight, 250);

    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [settingHeadingTops]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = getScrollTop();
      if (!headingTops) return;
      const currentHeading = headingTops
        .slice()
        .reverse()
        .find((headingTop) => scrollTop >= headingTop.top - 4);

      if (currentHeading) {
        setActiveToc(currentHeading.slug);
      } else {
        setActiveToc('');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [headingTops]);

  return (
    <div className='hidden lg:block sticky top-[120px] right-0 h-fit border-b-2 border-[#f7ab0a]/50 min-w-[240px] max-w-[260px]'>
      {tableOfContents.length ? (
        <div className='p-5'>
          <div className='font-semibold underline underline-offset-8 decoration-[#f7ab0a]/50 decoration-wavy'>
            목차
          </div>
          <ul className='mt-2 flex flex-col items-start justify-start text-sm list-none m-0 p-0'>
            {tableOfContents.map((toc, i) => (
              <li
                data-level={numberToStringMap[toc.level]}
                key={i}
                className={`${activeToc === toc.slug ? 'active' : ''} ${
                  numberToStringMap[toc.level] === 'two' ? 'ml-4 ' : ''
                } ${
                  numberToStringMap[toc.level] === 'three' ? 'ml-8' : ''
                } w-full my-1 p-0`}
              >
                <Link
                  href={`#${toc.slug}`}
                  className={`${
                    numberToStringMap[toc.level] === 'one' ? '' : 'gap-1'
                  } flex items-center hover:text-[#f7ab0a] transition-colors`}
                >
                  {numberToStringMap[toc.level] === 'one' ? null : <IconChevronRight />}
                  <span className='truncate overflow-hidden whitespace-nowrap'>
                    {toc.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
