import Loading from "@/app/loading";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function UploadLoading() {
  return (
    <Card
      isBlurred
      radius="lg"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 z-[50] flex flex-col justify-center backdrop-blur-sm"
    >
      <CardBody className="flex gap-5 items-center">
        <p>이미지 업로드 중...</p>
        <Loading />
      </CardBody>
    </Card>
  );
}
