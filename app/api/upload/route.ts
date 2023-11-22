import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { title, content } = await request.json();

  const form = new FormData();

  form.append(
    'fileUpload',
    new Blob([content], { type: 'text/plain' }),
    `${title}.mdx`
  );

  // It is not recommended to use the HYGRAPH_ASSET_TOKEN in the Front-End.
  // In this example we're using it, but in a real application you should
  // use a backend to upload the file and use the HYGRAPH_ASSET_TOKEN there.
  const response = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
    },
    body: form,
  });

  const data = await response.json();
  console.log('data: ', JSON.stringify(data, null, 2));

  return NextResponse.json({ message: true });
}
