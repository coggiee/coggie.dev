import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc';

export default async function Book() {
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: `---
      title: RSC Frontmatter Example
      author: Lee Robinson
      ---
      # Hello World
      This is from Server Components!
    `,
    options: { parseFrontmatter: true },
  })

  console.log('content: ', content);
  console.log('frontmatter', frontmatter);
  return (
    
    <div className='dark:text-[#fff] w-full mx-auto flex flex-col  md:flex-row gap-5 relative'>
      <MDXRemote
        source={`# Hello World

        This is from Server Components!
        `}
      />
      <h1>{frontmatter.title}</h1>
        {content}
    </div>
  );
}