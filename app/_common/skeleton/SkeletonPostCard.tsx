import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function SkeletonPostCard() {
  return (
    <div className="flex flex-col w-80 h-52 gap-5">
      <Skeleton className="rounded-lg w-full h-40 flex-shrink-0" />
      <div className="flex flex-col gap-2 grow w-full min-w-0">
        <div className="flex flex-col gap-3 mb-3">
          <Skeleton className="h-6 w-60" />
          <Skeleton className="h-2 w-40" />
          <Skeleton className="h-2 w-32" />
          <Skeleton className="h-2 w-44" />
        </div>
        <div className="grow flex items-end gap-2 mb-5">
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="w-10 h-5 rounded-md" />
            ))}
        </div>
        <Skeleton className="w-12 h-3" />
      </div>
    </div>
  );
}
