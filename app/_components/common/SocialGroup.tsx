import IconGithub from '@/app/_icons/IconGithub';
import IconGmail from '@/app/_icons/IconGmail';
import IconVelog from '@/app/_icons/IconVelog';
import { SocialGroupProps } from '@/types/type';
import { Button, ButtonGroup, Link } from '@nextui-org/react';

const customProps =
  'border border-item-border-light p-2 rounded-full bg-sub-light text-black dark:text-white dark:bg-sub-dark dark:border-item-border-dark';

const SocialGroup = ({
  fontSize = '14px',
  display = 'flex',
  justify = 'normal',
  align = 'normal',
  direction = 'row',
  gap = 2,
}: SocialGroupProps) => {
  return (
    <ButtonGroup
      className={`${display} flex-${direction} justify-${justify} items-${align} text-black dark:text-white font-mono text-[${fontSize}] self-start `}
    >
      <Button
        href='https://github.com/coggiee'
        as={Link}
        variant='flat'
        radius='full'
        size='md'
        isIconOnly
      >
        <IconGithub />
      </Button>
      <Button
        href='https://velog.io/@49crehbgr'
        as={Link}
        variant='flat'
        radius='full'
        size='md'
        isIconOnly
      >
        <IconVelog />
      </Button>
      <Button
        href='mailto:zentechie7@gmail.com'
        as={Link}
        variant='flat'
        radius='full'
        size='md'
        isIconOnly
      >
        <IconGmail />
      </Button>
    </ButtonGroup>
  );
};

export default SocialGroup;
