import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function SkeletonPostCard() {
  return (
    <div>
      <div className="flex flex-row gap-5">
        <Skeleton className="rounded-lg w-32 h-32 flex-shrink-0" />
        <div className="flex flex-col gap-2 grow w-full min-w-0">
          <div className="flex flex-col sm:gap-0 sm:flex-row justify-between mr-3 gap-2">
            <Skeleton className="w-12 h-3" />
            <Skeleton className="w-12 h-3" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-60" />
            <Skeleton className="h-2 w-40" />
            <Skeleton className="h-2 w-20" />
            <Skeleton className="h-2 w-80" />
          </div>
          <div className="grow flex items-end gap-2 ">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} className="w-10 h-6 rounded-md" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
