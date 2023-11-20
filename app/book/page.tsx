import { MDXRemote } from 'next-mdx-remote/rsc';

import { getArticleProps } from '@/utils/handleDB';

export default async function Book() {
  const data = await getArticleProps('/posts/2023/10');
  console.log(data.props!.content);
  return (
    <div className='dark:text-[#fff]'>
      <MDXRemote source={...data.props!.content} />
    </div>
  );
}
