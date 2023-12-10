import { sync } from 'glob';
import path from 'path';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import 'dayjs/locale/ko';

dayjs.locale('ko');

type PostMatter = {
  title: string;
  description: string;
  tags: string[];
  draft?: boolean;
  date: string;
  hot: boolean;
}

export type Post = PostMatter & {
  slug: string;
  content: string;
  time: string
  readingMinutes: number;
  wordCount: number;
  id: string;
}

const BASE_PATH = '/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = fs.readFileSync(postPath, { encoding: 'utf-8' });
    const { content, data} = matter(file);
    const grayMatter = data as PostMatter;

    if (grayMatter.draft) {
      return;
    }

    return {
      ...grayMatter,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('dddd, YYYY-MM-DD'),
      content,
      time: dayjs(grayMatter.date).format('HH:MM'),
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace('.mdx', ''),
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    };
  } catch (e) {
    // console.error(e);
  }
}

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath);
    if (!post) return ac;

    return [ ...ac, post ];
  }, []);
};
