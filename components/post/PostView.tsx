"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { formatReadingMinutes } from "@/utils/formatTime";
import SkeletonPostCard from "@/components/skeleton/SkeletonPostCard";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Separator } from "../ui/separator";
import { useMemo } from "react";
import dayjs from "dayjs";
import { useQueryTotalPosts } from "@/hooks/query/useQueryTotalPosts";
import { useTagStore } from "@/store/useTagStore";
import { useTitleStore } from "@/store/useTitleStore";

const PostSideCard = dynamic(() => import("./PostSideCard"), {
  loading: () => <SkeletonPostCard />,
});
interface GroupedPosts {
  [year: string]: {
    [month: string]: any[];
  };
}

export default function PostView() {
  const { tag } = useTagStore();
  const { title } = useTitleStore();

  const {
    data: postList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useQueryTotalPosts({ tag: tag === "All" ? null : tag, title });

  const postListByYearAndMonth = useMemo(() => {
    const grouped = postList.reduce((acc: any, post: any) => {
      const year = dayjs(post.date).format("YYYY");
      const month = dayjs(post.date).format("MM");

      if (!acc[year]) acc[year] = {};
      if (!acc[year][month]) acc[year][month] = [];

      acc[year][month].push(post);
      return acc;
    }, {});

    const sortedByYear = Object.keys(grouped).sort((a, b) =>
      b.localeCompare(a),
    );

    const sortedGrouped: GroupedPosts = {};
    sortedByYear.forEach((year) => {
      sortedGrouped[year] = grouped[year];
    });

    return sortedGrouped;
  }, [postList]);

  return (
    <main className="space-y-5 flex flex-col font-aritaburi">
      {postList.length === 0 ? (
        <Card>
          <CardHeader>
            <p className="text-[#929292]">포스트가 없어요.</p>
          </CardHeader>
        </Card>
      ) : (
        <>
          <main className="flex flex-col gap-12">
            {Object.entries(postListByYearAndMonth)
              .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
              .map(([year, months]) => (
                <section key={year} className=" flex flex-col gap-10">
                  <h1 className="flex items-center gap-3 font-bold text-3xl after:content-[''] after:h-[1px] after:bg-black/30 after:grow">
                    {year}년
                  </h1>
                  {Object.entries(months)
                    .sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
                    .map(([month, postList]) => (
                      <div key={month} className="flex gap-7">
                        <h2 className="text-xl whitespace-nowrap ">
                          {month}월
                        </h2>
                        <aside className="w-full flex flex-col gap-3">
                          {postList.map((post: any) => (
                            <div key={post.id} className="flex flex-col gap-3">
                              <Link
                                href={`/${post.id}`}
                                passHref
                                className="rounded-lg overflow-hidden space-y-2"
                              >
                                <PostSideCard
                                  key={post.id}
                                  title={post.title}
                                  description={post.description}
                                  tags={post.tags}
                                  readTimeMinutes={formatReadingMinutes(
                                    post.content,
                                  )}
                                />
                              </Link>
                              <Separator />
                            </div>
                          ))}
                        </aside>
                      </div>
                    ))}
                </section>
              ))}
          </main>
          <footer className="flex justify-center items-center font-amaranth">
            <Button
              onClick={() => fetchNextPage()}
              className="w-fit"
              disabled={isFetchingNextPage || !hasNextPage}
            >
              {isFetchingNextPage ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wait...
                </>
              ) : (
                <>Load</>
              )}
            </Button>
          </footer>
        </>
      )}
    </main>
  );
}
