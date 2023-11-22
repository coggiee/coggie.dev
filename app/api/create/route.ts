import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
  const { title, content } = await request.json();

  const filePath = path.join(process.cwd(), `/posts/${title}.mdx`);

  try {
    fs.writeFileSync(filePath, content);
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ message: 'success' });
}
