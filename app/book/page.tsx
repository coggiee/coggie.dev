import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc';
// import { request, gql } from 'graphql-request';
// import { graphql } from 'graphql';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
  cache: new InMemoryCache(),
});

const query = gql`
  query Assets($fileName: String!) {
    assets(where: { fileName: $fileName }) {
      createdAt
      id
      publishedAt
      fileName
      url
      updatedAt
    }
  }
`;

export async function getFiles() {
  const { data } = await client.query({
    query,
    variables: { fileName: 'test.mdx' },
  });

  return data;
}

export default async function Book() {
  // const { content, frontmatter } = await compileMDX<{ title: string }>({
  //   source: `---
  //     title: RSC Frontmatter Example
  //     author: Lee Robinson
  //     ---
  //     # Hello World
  //     This is from Server Components!
  //   `,
  //   options: { parseFrontmatter: true },
  // })
  
  return (
    <div className='dark:text-[#fff] w-full mx-auto flex flex-col  md:flex-row gap-5 relative'>
      {/* <MDXRemote
        source={`# Hello World

        This is from Server Components!
        `}
      />
      <h1>{frontmatter.title}</h1>
        {content} */}
    </div>
  );
}
