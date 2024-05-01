import { getSinglePost } from '@/lib/hygraph';
import { serializeMdx } from '@/lib/mdx';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { id } = await request.json();
  const post = await getSinglePost(id);
  const serializedMdx = await serializeMdx(post!.content);

  return NextResponse.json({ post, serializedMdx });
}
