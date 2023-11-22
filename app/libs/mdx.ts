import { serialize } from 'next-mdx-remote/serialize';
import fs from 'node:fs';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks from 'rehype-external-links';

const rehypeOptions = {
  theme: {
    dark: 'github-light',
    light: 'github-dark'
  },
  keepBackground: true,
};

// <MDXRemote /> now accepts a source prop, instead of accepting the serialized output from next-mdx-remote/serialize
export const serializeMdx = (source: string) => {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks, remarkToc],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        // [rehypePrettyCode, rehypeOptions],
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            content: undefined,
            properties: {
              className: ['anchor'],
            },
          },
        ],
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['nofollow', 'noopener', 'noreferrer'],
          },
        ],
      ],
      format: 'mdx',
    },
  });
};
