import { activity } from '../data/activity';
import { hobby } from '../data/hobby';
import { tech } from '../data/tech';
import { InfoCard } from './InfoCard';

export const InfoSection = () => {
  return (
    <section className='mt-10 flex flex-col gap-20'>
      <InfoCard title={'🛠️ 기술'} isDesc={true} items={tech} />
      <InfoCard title={'🌈 취미'} isDesc={true} items={hobby} />
      <InfoCard title={'🕺🏻 활동'} isDesc={false} items={activity} />
    </section>
  );
};
