import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkBreaks from 'remark-breaks';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks from 'rehype-external-links';
import fs from 'node:fs';
import { calculateReadingTime } from './utils/calculateReadingTime';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    icon: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    hot: { type: 'boolean' }, // 읽으면 좋은 포스트 표시
    draft: { type: 'boolean', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readTimeMinutes: {
      type: 'string',
      resolve: (doc) => calculateReadingTime(doc.body.code),
    },
  },
}));

const rehypeOptions = {
  theme: JSON.parse(
    fs.readFileSync(
      new URL('../../../assets/moonlight-ii.json', import.meta.url),
      'utf-8'
    )
  ),
  keepBackground: true,
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks, remarkToc],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrettyCode, rehypeOptions],
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
  },
});
