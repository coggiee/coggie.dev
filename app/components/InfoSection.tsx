import { activity } from '../data/activity';
import { hobby } from '../data/hobby';
import { tech } from '../data/tech';

export const InfoSection = () => {
  return (
    <section className='mt-10 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-bold decoration-[#f7ab0a]/50 underline underline-offset-8'>기술</h1>
        <div className='flex flex-col'>
          {tech.map((item) => (
            <div key={item.title}>
              <h3 className='text-xl font-bold'>{item.title}</h3>
              <div>
                <ul>
                  {item.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-bold decoration-[#f7ab0a]/50 underline underline-offset-8'>취미</h1>
        <div className='flex flex-col'>
          {hobby.map((item) => (
            <div key={item.title}>
              <h3 className='text-xl font-bold'>{item.title}</h3>
              <div>
                <ul>
                  {item.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-bold decoration-[#f7ab0a]/50 underline underline-offset-8'>활동</h1>
        <div className='flex flex-col'>
          <ul>
            {activity.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
