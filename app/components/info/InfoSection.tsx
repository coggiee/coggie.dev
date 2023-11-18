import { activity } from '../../data/activity';
import { hobby } from '../../data/hobby';
import { tech } from '../../data/tech';
import { InfoCard } from './InfoCard';

export const InfoSection = () => {
  return (
    <div className='collapse collapse-arrow hover:bg-[#e3e3e361]'>
      <input type='checkbox' />
      <div className='collapse-title text-gray-700 text-sm leading-loose'>더 보기</div>
      <div className='collapse-content flex flex-col gap-10'>
        <InfoCard title={'🛠️ 기술'} isDesc={true} items={tech} />
        <InfoCard title={'🌈 취미'} isDesc={true} items={hobby} />
        <InfoCard title={'🕺🏻 활동'} isDesc={false} items={activity} />
      </div>
    </div>
  );
};
