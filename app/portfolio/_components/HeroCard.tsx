import ShineBorder from "@/components/magicui/shine-border";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HeroCard() {
  return (
    <div className="grid grid-cols-3 auto-cols-[22rem] auto-rows-min gap-5 font-pretendard">
      <ShineBorder
        className="min-w-[200px] w-full relative col-start-1 col-end-1 row-span-2 h-full bg-background flex items-center justify-center overflow-hidden md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <div className="h-full flex flex-col justify-between">
          <Image
            src="/profile.png"
            alt="profile"
            width={200}
            height={200}
            className="w-full object-cover rounded-full"
          />
          <div className="font-black text-3xl flex items-end">
            <h1>문휘식</h1>
          </div>
        </div>
      </ShineBorder>
      <div className="grid gap-3 col-start-2 col-end-4 row-start-1 row-end-1 grid-cols-2 auto-cols-[22rem]">
        <ShineBorder
          className="min-w-[200px] w-full relative row-start-1 col-start-1 col-end-2 h-full flex items-center justify-center overflow-hidden md:shadow-xl "
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <span className="pointer-events-none whitespace-pre-wrap text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] flex flex-col justify-center p-2">
            <span className="text-left text-black dark:text-white">
              Konkuk Univ
            </span>
            <span className="text-left text-black dark:text-white">
              Major in CS
            </span>
            <span className="text-sm font-normal text-gray-500 pt-3">
              18.03 ~ 24.02
            </span>
          </span>
        </ShineBorder>
        <ShineBorder
          className="min-w-[200px] w-full relative row-start-1 col-start-2 col-end-3 h-full flex items-center justify-center overflow-hidden md:shadow-xl "
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-white text-black dark:bg-black dark:text-white bg-clip-text text-4xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center p-2 font-pretendard">
            <span className="text-black dark:text-white">Frontend</span>
            <span className="text-black dark:text-white">Engineer</span>
          </span>
        </ShineBorder>
      </div>
      <ShineBorder
        className="relative flex items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl col-start-2 col-end-4 row-start-2 row-end-2 h-full w-full"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <h1 className="z-10 whitespace-pre-wrap text-3xl font-bold tracking-tighter text-black dark:text-white mb-5 font-pretendard">
          Focus on
        </h1>
        <main className="text-gray-800 dark:text-gray-300 font-pretendard">
          <ul className="space-y-1">
            <li className="flex flex-row items-center gap-2">
              <CheckIcon />
              <span>예측할 수 없는 사용자 패턴</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <CheckIcon />
              <span>동료 개발자의 경험</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <CheckIcon />
              <span>
                단순 구현이 아닌, 발생 가능한 문제들을 주도적으로 생각
              </span>
            </li>
          </ul>
        </main>
      </ShineBorder>
    </div>
  );
}
