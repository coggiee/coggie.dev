import { Avatar, Card, CardHeader, CardBody } from '@nextui-org/react';
import SocialGroup from '../common/SocialGroup';
import Bio from '../sidebar/Bio';
import Hero from './Hero';

type HeroProps = {
  src: string;
};

const HeroSection = ({ src }: HeroProps) => {
  return (
    <Card
      isBlurred
      shadow='md'
      className='w-full flex-grow-0 flex-shrink-0 p-3 rounded-lg bg-item-light/70 dark:bg-item-dark/20 dark:text-white'
    >
      <CardHeader className='flex justify-between'>
        <Avatar
          color='success'
          name='coggie'
          isBordered
          src={src}
          className='w-28 h-28 text-large bg-transparent'
        />
        <SocialGroup
          fontSize='text-sm'
          display='flex'
          justify='between'
          align='center'
          direction='row'
          gap={2}
        />
      </CardHeader>
      <CardBody className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <Hero />
          <Bio />
        </div>
      </CardBody>
    </Card>
  );
};

export default HeroSection;
