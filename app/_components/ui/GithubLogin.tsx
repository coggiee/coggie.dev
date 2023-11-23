import React from 'react';
import { Tooltip } from './Tooltip';
import IconGithub from '@/app/_icons/IconGithub';

type Props = {
  handleOnLogin: () => void;
};

export default function GithubLogin({ handleOnLogin }: Props) {
  return (
    <Tooltip dataTip='login'>
      <button onClick={handleOnLogin} className='flex items-center gap-2'>
        <IconGithub className='transition-colors hover:text-[#6945a8] dark:text-white dark:hover:text-[#6945a8]' />
      </button>
    </Tooltip>
  );
}
