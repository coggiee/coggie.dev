import IconBackToHome from "@/app/_icons/IconBackToHome";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomeButton() {
  const router = useRouter();

  return (
    <Button
      variant="flat"
      radius="full"
      size="sm"
      isIconOnly
      className="dark:text-white"
      onPress={() => router.push("/")}
    >
      <IconBackToHome className="text-sm" />
    </Button>
  );
}
