import { Card, CardContent } from "@/components/ui/card";
import { LoaderCircle } from "lucide-react";
import React from "react";

export default function UploadLoading() {
  return (
    <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 z-[50] flex flex-col justify-center">
      <CardContent className="flex flex-col gap-5 items-center pb-0">
        <p>이미지 업로드 중</p>
        <LoaderCircle className="animate-spin w-7 h-7" />
      </CardContent>
    </Card>
  );
}
