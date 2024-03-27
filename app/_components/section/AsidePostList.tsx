import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Fallback from "../common/Fallback";

interface PostListProps {
  posts: any;
  title: string;
}

export default function AsidePostList({ posts, title }: PostListProps) {
  return (
    <aside className="space-y-5 w-full">
      <h1 className="text-lg font-semibold dark:text-white w-full">{title}</h1>
      <main className="flex flex-col gap-2">
        {posts.length === 0 && <Fallback title={"아직 포스트가 없습니다."} />}
        {posts.length > 0 &&
          posts.map(({ node }: { node: any }) => (
            <Link
              key={node.id}
              href={`/blog/${node.id}`}
              passHref
              className="hover:scale-105 transition-all duration-250"
            >
              <Card
                isBlurred
                className="w-full rounded-lg font-mono bg-item-light dark:bg-item-dark"
              >
                <CardHeader>
                  <h2 className="text-sm w-full truncate">{node.title}</h2>
                </CardHeader>
                <CardBody className="py-0 pb-3">
                  <p className="text-xs truncate text-gray-700 dark:text-gray-300 w-full">
                    {node.description}
                  </p>
                </CardBody>
              </Card>
            </Link>
          ))}
      </main>
    </aside>
  );
}
