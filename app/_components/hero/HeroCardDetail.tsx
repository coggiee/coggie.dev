import React from 'react';
import HeroSkill from './HeroSkill';
import HeroName from './HeroName';
import HeroIntroduction from './HeroIntroduction';

export default function HeroCardDetail() {
  return (
    <main className='flex flex-col gap-7 border-b border-item-border-light dark:border-item-border-dark pb-7'>
      <div className='flex flex-col gap-3'>
        <HeroName />
        <HeroSkill />
        <HeroIntroduction />
      </div>
    </main>
  );
}
