import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 font-aritaburi">
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="font-thin flex flex-col items-center gap-5">
          <p className="text-4xl md:text-7xl">404</p>
          <p className="text-lg md:text-2xl">페이지를 찾을 수 없습니다.</p>
        </h2>
        <Button asChild variant="link" className="after:content-['_↗']">
          <Link href="/">블로그로 돌아가기</Link>
        </Button>
      </div>
    </div>
  );
}
