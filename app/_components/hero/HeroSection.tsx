import SocialGroup from '../common/SocialGroup';
import Bio from '../sidebar/Bio';
import Avatar from '../common/Avatar';
import Hero from './Hero';

type HeroProps = {
  src: string;
};

const HeroSection = ({ src }: HeroProps) => {
  return (
    <section className='w-full flex-grow-0 flex-shrink-0 p-5 border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between'>
            <Avatar src={src} />
            <SocialGroup
              fontSize='text-sm'
              display='flex'
              justify='between'
              align='center'
              direction='row'
              gap={2}
              isGroup={true}
            />
          </div>
          <Hero />
          <Bio />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
