'use client';

import React from 'react';
import InfoSiderbar from '../sidebar/InfoSiderbar';

export default function MainPageSection() {
  return (
    <>
      <aside className='snap-start w-full min-w-0 lg:basis-1/2 basis-1/3 lg:max-w-sm lg:min-w-min flex flex-col flex-grow-0 flex-shrink-0 gap-5 md:snap-none'>
        <InfoSiderbar />
      </aside>
    </>
  );
}
