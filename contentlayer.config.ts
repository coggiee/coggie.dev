import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks from 'rehype-external-links';
import fs from 'node:fs';

export const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  // Step 3: Calculate the word count
  const noOfWords = text.split(/\s/g).length;
  // Step 4: Calculate the estimated reading time (in minutes)
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  // Step 5: Format the output
  return `${readTime} min read`;
};

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
    },
    draft: { type: 'boolean', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readTimeMinutes: {
      type: 'number',
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
    remarkPlugins: [
      remarkGfm,
      [
        remarkToc,
        {
          heading: '목차',
          maxDepth: 3,
        },
      ],
    ],
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
