import { getTotalTags } from "@/lib/hygraph";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useQueryTotalTags = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["total-tags"],
    queryFn: () => getTotalTags(),
    select: (data) => data.flatMap((item: any) => item.tag),
  });

  if (error) {
    throw error;
  }

  return { data };
};

export default useQueryTotalTags;
