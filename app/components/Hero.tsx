import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='p-5 rounded-xl shadow-xl'>
      <div className='flex flex-col gap-10 md:flex-row '>
        <aside className='h-64 w-full relative md:h-96'>
          <Image
            src={'/profile.jpg'}
            layout='fill'
            objectFit='contain'
            alt='프로필 이미지'
            className='absolute'
          />
        </aside>
        <main className='flex flex-col gap-3'>
          <h1 className='text-xl'>
            <p>안녕하세요,</p>
            <p>프론트엔드 개발자 문휘식입니다.</p>
          </h1>
          <p>
            깔끔하고 직관적인 UI를 선호합니다. 사용자 관점에서 제품에 다가가며
            더 나은 사용자 경험을 제공하기 위한 방법을 꾸준히 고민합니다.
          </p>
        </main>
      </div>
    </section>
  );
};
