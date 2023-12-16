import React from 'react';
import Tooltip from './Tooltip';
import IconGithub from '@/app/_icons/IconGithub';
import { GithubLoginProps } from '@/types/type';

const GithubLogin = ({ handleOnLogin }: GithubLoginProps) => {
  return (
    <Tooltip dataTip='login'>
      <button onClick={handleOnLogin} className='flex items-center gap-2'>
        <IconGithub className='transition-colors hover:text-[#6945a8] dark:text-white dark:hover:text-[#6945a8]' />
      </button>
    </Tooltip>
  );
}

export default GithubLogin;