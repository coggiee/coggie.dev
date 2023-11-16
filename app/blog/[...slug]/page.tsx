import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { formatDate } from '@/utils/formatDate';
import { formatReadTime } from '@/utils/formatReadTime';
import { Tag } from '@/app/components/post/Tag';
import IconTimerSand from '@/app/Icons/IconTimerSand';
import { ko } from 'date-fns/locale';
import IconBxCalendarStar from '@/app/Icons/IconBxCalendarStar';
import IconLink from '@/app/Icons/IconLink';
import { parseHeaderForTOC } from '@/utils/parseHeaderForTOC';
import { TocSidebar } from '@/app/components/post/Toc';

// similar with getStaticPaths
export const generateStaticParams = async () => {
  const paths = allPosts.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));
  return paths;
};

// data fetching
async function getProps({ params }: { params: { slug: string[] } }) {
  const { slug } = params as { slug: string[] };
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === slug.join('/')
  );
  return {
    props: {
      post,
    },
  };
}

// params came from `generateStaticParams` above.
export default async function PostPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const {
    props: { post },
  } = await getProps({ params });

  const MDXComponent = getMDXComponent(post!.body.code);
  return (
    <div className='prose dark:prose-dark w-full md:max-w-7xl max-w-full flex flex-row-reverse relative gap-10 mx-auto'>
      <TocSidebar tableOfContents={parseHeaderForTOC(post!.body.raw)} />
      <article className='min-w-0 w-full max-w-full mx-auto py-8 border-b-[1px] border-gray-300 relative break-words'>
        <div className='mb-8 flex flex-col'>
          <h1 className='text-4xl font-bold w-full break-words'>
            {post!.title}
          </h1>
          <div className='flex justify-start items-center gap-2 mb-5'>
            {post!.tags?.map((tag: string) => <Tag key={tag} tag={tag} />)}
          </div>
          <div className='w-full flex justify-between items-center mb-16 pb-10 border-b-[1px]'>
            <time
              dateTime={post!.date}
              className='mb-1 text-xs text-black flex flex-col justify-center gap-3'
            >
              <div className='text-xs text-black flex gap-2 items-center'>
                <IconBxCalendarStar />
                {formatDate(post!.date)} /{' '}
                {format(parseISO(post!.date), 'cccc LLLL d, yyyy', {
                  locale: ko,
                })}
              </div>
              <div className='text-xs text-black flex gap-1 items-center'>
                <IconTimerSand />
                {format(parseISO(post!.date), 'H:mm')} - {post!.readTimeMinutes}
              </div>
            </time>
            {/* Copy link when click */}
            <button className='text-[16px] w-[30px] h-[30px] box-content rounded-full bg-[#f7ab0a] flex justify-center items-center self-start hover:bg-[#ff8259] hover:drop-shadow-lg hover:shadow-lg'>
              <IconLink />
            </button>
          </div>
            <MDXComponent />
        </div>
      </article>
    </div>
  );
}
