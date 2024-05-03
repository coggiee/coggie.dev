import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function SkeletonPostCard() {
  return (
    <div className="flex flex-row gap-2 justify-between grow w-full min-w-0">
      <div className="flex flex-col gap-3 mb-3">
        <Skeleton className="h-6 w-80" />
        <Skeleton className="h-4 w-40" />
      </div>
      <div className="space-y-2">
        <div className="grow flex items-end gap-2">
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="w-10 h-4 rounded-md" />
            ))}
        </div>
        <Skeleton className="w-14 h-4" />
      </div>
    </div>
  );
}
