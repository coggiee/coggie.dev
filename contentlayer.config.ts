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
import { spawn } from 'node:child_process';

const BLOG_DIRECTORY = 'posts';
const SYNC_INTERVAL = 1000 * 10;

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `posts/**/*.mdx`,
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
      resolve: (post) => `posts/${post._raw.flattenedPath}`,
    },
    readTimeMinutes: {
      type: 'string',
      resolve: (doc) => calculateReadingTime(doc.body.code),
    },
  },
}));

const rehypeOptions = {
  theme: {
    dark: 'github-light',
    light: JSON.parse(
      fs.readFileSync(
        new URL('../../../assets/moonlight-ii.json', import.meta.url),
        'utf-8'
      )
    ),
  },
  keepBackground: true,
};

const syncContentFromGit = async (contentDir: string) => {
  console.log('Syncing content from git...');
  const syncRun = async () => {
    const gitUrl = 'https://github.com/lunarmoon7/zentechie-blog.git';
    // contentDir이 디렉토리라면...
    await runBashCommand(`
      if [ -d  "${contentDir}" ];
        then
          cd "${contentDir}";
          git pull origin master --rebase;
        else
          git clone --depth 1 --single-branch ${gitUrl} ${contentDir};
      fi
    `);
  };

  let wasCancelled = false;
  let syncInterval: NodeJS.Timeout;

  const syncLoop = async () => {
    console.log('Syncing content from git...');

    await syncRun();

    if (wasCancelled) return;

    syncInterval = setTimeout(syncLoop, SYNC_INTERVAL);
  };

  await syncLoop();

  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};

const runBashCommand = (command: string) => {
  new Promise((resolve, reject) => {
    const child = spawn(command, [], { shell: true });

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', (data) => process.stdout.write(data));

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', (data) => process.stderr.write(data));

    child.on('close', function (code) {
      if (code === 0) {
        resolve(void 0);
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });
};

export default makeSource({
  syncFiles: syncContentFromGit('posts'),
  // syncFiles: syncContentFromGit,
  contentDirPath: 'posts',
  contentDirInclude: ['posts'],
  documentTypes: [Post],
  disableImportAliasWarning: true,
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

// export default makeSource({
//   contentDirPath: 'posts',
//   documentTypes: [Post],
//   mdx: {
//     remarkPlugins: [remarkGfm, remarkBreaks, remarkToc],
//     rehypePlugins: [
//       rehypeSlug,
//       rehypeCodeTitles,
//       [rehypePrettyCode, rehypeOptions],
//       [
//         rehypeAutolinkHeadings,
//         {
//           behavior: 'wrap',
//           content: undefined,
//           properties: {
//             className: ['anchor'],
//           },
//         },
//       ],
//       [
//         rehypeExternalLinks,
//         {
//           target: '_blank',
//           rel: ['nofollow', 'noopener', 'noreferrer'],
//         },
//       ],
//     ],
//   },
// });
