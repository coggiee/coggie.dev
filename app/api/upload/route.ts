import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const response = await fetch(`${process.env.NEXT_PUBLIC_HYGRAPH_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ASSET_TOKEN}`,
    },
    body: form,
  });

  const data = await response.json();
  return NextResponse.json({ data });
}