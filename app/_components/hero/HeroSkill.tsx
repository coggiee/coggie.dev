import React from 'react';
import Badge from '../common/Badge';
import { skill } from '@/app/_data/skill';

export default function HeroSkill() {
  return (
    <div className='flex gap-2 flex-wrap mb-5'>
      {skill.map((s) => (
        <Badge key={s.title} text={s.title} />
      ))}
    </div>
  );
}
