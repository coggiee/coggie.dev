import React from 'react';
import Badge from '../common/Badge';
import { skill } from '@/app/_data/skill';
import { Chip } from '@nextui-org/react';

export default function HeroSkill() {
  return (
    <div className='flex gap-2 flex-wrap mb-5'>
      {skill.map((s) => (
        <Chip
          key={s.title}
          variant='flat'
          size='sm'
          radius='sm'
          classNames={{
            base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
            content: 'drop-shadow shadow-black text-white',
          }}
        >
          {s.title}
        </Chip>
      ))}
    </div>
  );
}
