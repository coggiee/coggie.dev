import Image from 'next/image';
import { SocialGroup } from '../common/SocialGroup';
import Badge from '../common/Badge';
import { skill } from '@/app/_data/skill';
import Bio from '../sidebar/Bio';
import { Avatar } from '../common/Avatar';

type HeroProps = {
  src: string;
};

export const Hero = ({ src }: HeroProps) => {
  return (
    <section className='w-full flex-grow-0 flex-shrink-0 p-5 border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark dark:text-white'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <div className='flex justify-between'>
            <Avatar src='/mimoji.png' />
            <SocialGroup
              fontSize='text-sm'
              display='flex'
              justify='between'
              align='center'
              direction='row'
              gap={2}
            />
          </div>

          <main className='flex flex-col gap-7 border-b border-item-border-light dark:border-item-border-dark pb-7'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-xl font-bold mb-2'>
                <span className='font-dhurjati text-3xl'>Coggie </span>
                <span className='font-teko'>(Moon Hwisik)</span>
              </h1>
              <div className='flex gap-2 flex-wrap mb-5'>
                {skill.map((s) => (
                  <Badge key={s.title} text={s.title} />
                ))}
              </div>
              <h3 className='text-base font-thin font-mono leading-tight'>
                <p>프론트엔드 개발자 문휘식입니다</p>
              </h3>
              <div className='flex flex-col gap-1 font-mono text-xs'>
                <p>
                  <span>인터렉티브한 웹</span>
                  <span>에 관심이 있습니다. </span>
                </p>
                <p>
                  최근에는 오버엔지니어링을 하지 않고, 어떻게{' '}
                  <span>재사용성 높은 컴포넌트</span>{' '}
                  <span>를 만들 수 있을지 고민하고 있습니다.</span>
                </p>
                <p>
                  <span>코드를 깔끔하게 작성하는 것을 좋아합니다.</span>
                </p>
              </div>
            </div>
          </main>
          <Bio />
        </div>
      </div>
    </section>
  );
};
