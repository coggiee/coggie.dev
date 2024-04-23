import Link from "next/link";
import React from "react";
import Fallback from "../global/Fallback";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PostListProps {
  posts: any;
  title: string;
}

export default function AsidePostList({ posts, title }: PostListProps) {
  return (
    <aside className="space-y-5 w-full font-aritaburi">
      <h1 className="text-lg dark:text-white w-full">{title}</h1>
      <main className="flex flex-col gap-2">
        {posts.length === 0 && <Fallback title={"아직 포스트가 없습니다."} />}
        {posts.length > 0 &&
          posts.map(({ node }: { node: any }) => (
            <Link
              key={node.id}
              href={`/${node.id}`}
              passHref
              className="hover:scale-105 transition-all duration-250"
            >
              <Card className="w-full rounded-md">
                <CardHeader className="p-3 pb-0">
                  <h2 className="text-sm w-full truncate">{node.title}</h2>
                </CardHeader>
                <CardContent className="p-3 pb-2">
                  <p className="text-xs truncate text-gray-700 dark:text-gray-300 w-full">
                    {node.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
      </main>
    </aside>
  );
}
