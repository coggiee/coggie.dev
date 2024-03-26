import React from "react";
import IconGithub from "@/app/_icons/IconGithub";
import { GithubLoginProps } from "@/types/type";
import { Button } from "@nextui-org/react";

export default function GithubLogin({ handleOnLogin }: GithubLoginProps) {
  return (
    <Button
      size="sm"
      radius="md"
      color="warning"
      variant="flat"
      onClick={handleOnLogin}
      className="font-bold"
    >
      로그인
    </Button>
  );
}
