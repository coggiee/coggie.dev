import { activity } from '../../_data/activity';
import { hobby } from '../../_data/hobby';
import { tech } from '../../_data/tech';
import { InfoCard } from './InfoCard';

export const InfoSection = () => {
  return (
    <div className='collapse collapse-arrow hover:bg-[#c1c1c12f] '>
      <input type='checkbox' />
      <div className='collapse-title text-gray-700 text-sm leading-loose dark:text-white'>
        더 보기
      </div>
      <div className='collapse-content flex flex-col gap-10 dark:text-white'>
        <InfoCard title={'🛠️ 기술'} isDesc={true} items={tech} />
        <InfoCard title={'🌈 취미'} isDesc={true} items={hobby} />
        <InfoCard title={'🕺🏻 활동'} isDesc={false} items={activity} />
      </div>
    </div>
  );
};
