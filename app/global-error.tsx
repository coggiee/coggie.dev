"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <html>
      <body className="font-aritaburi">
        <h1>올바르지 않은 URL이에요.</h1>
        <h2>Message{error.message}</h2>
        <Button onClick={() => router.push("/")} variant="link">
          돌아가기
        </Button>
      </body>
    </html>
  );
}
