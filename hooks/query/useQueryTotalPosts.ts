import { getTotalPosts } from "@/lib/hygraph";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

export const useQueryTotalPosts = ({
  tag,
  title,
}: {
  tag?: string | null;
  title?: string | null;
}) => {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ["total-posts", tag, title],
      queryFn: ({ pageParam }) =>
        getTotalPosts({
          after: pageParam,
          tag: tag ? [tag] : null,
          title: title || null,
        }),
      initialPageParam: null,
      getNextPageParam: (lastPage, pages: any[]) => {
        const hasNextPage = lastPage.pageInfo.hasNextPage;

        return hasNextPage ? lastPage.pageInfo.endCursor : undefined;
      },
      select: (data) => {
        const postList = data.pages.flatMap((page) =>
          page.edges.map((edge: any) => edge.node),
        );

        return {
          pages: postList,
          pageParams: data.pageParams,
        };
      },
    });

  if (error) {
    throw error;
  }

  return {
    data: data.pages,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
