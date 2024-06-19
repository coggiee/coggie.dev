import WordPullUp from "@/components/magicui/word-pull-up";
import React from "react";
import { Icons } from "../_components/Icons";
import Link from "next/link";
import { GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconCloudDemo } from "../_components/IconCloudDemo";
import { UketBeam } from "../_components/UketBeam";
import ShineBorder from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";

export default function Uket() {
  return (
    <section className="container">
      <header className="flex flex-row justify-between">
        <div className="flex items-center justify-end gap-5">
          <WordPullUp
            className="text-4xl text-left font-bold tracking-[-0.02em] text-black dark:text-white md:text-5xl md:leading-[5rem]"
            words="Uket"
          />
          <div className="flex h-full items-end mb-10">
            <Badge>현재 개발 중</Badge>
          </div>
        </div>
        <aside className="flex items-center gap-2">
          <Link href="https://www.linkedin.com/feed/">
            <Button size="icon" variant="ghost">
              <Icons.notion className="h-6 w-6 dark:text-white" />
            </Button>
          </Link>
          <Link href="https://github.com/DCNJ-Uket/Uket-FE">
            <Button size="icon" variant="ghost">
              <GlobeIcon className="w-6 h-6" />
            </Button>
          </Link>
          <Link href="">
            <Button size="icon" variant="ghost">
              <Icons.gitHub className="h-6 w-6 dark:text-white" />
            </Button>
          </Link>
        </aside>
      </header>
      <main className="flex flex-col gap-10">
        <div>
          웨이팅을 없애고 미리 티켓팅을 해 그 시간을 더 즐겁게! 즐길 수 있게
          하는 대학 축제 연예인 공연에 대한 티켓팅 서비스
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">구성 인원</h1>
          <h2>FE 2﹒BE 2﹒UI/UX﹒PM</h2>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">FE 기술 스택</h1>
          {/* <IconCloudDemo className="border bg-background pb-5 px-5 rounded-xl" /> */}
          <UketBeam className="max-w-lg" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-xl">담당 파트</h1>
          <div>
            <ul className="list-disc list-inside ml-6">
              <li>FE 리드</li>
              <li>개발 환경 및 배포 세팅</li>
              <li>모노레포 구축, 앱 내 서비스와 백오피스 분리</li>
              <li>
                Suspense, Error Boundary를 활용한 선언적 비동기 및 에러 처리
              </li>
              <li>
                Axios의 Interceptor, Instance를 활용하여 네트워크 요청 모듈화
              </li>
              <li>Protected Routes 설정</li>
              <li>
                페이지 및 기능 구현
                <ul className="list-disc ml-6">
                  <li>티켓 정보 조회</li>
                  <li>축제 정보 조회</li>
                  <li>소셜 로그인 및 회원가입</li>
                  <li>축제 정보 확인 페이지</li>
                  <li>랜딩 페이지</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-xl">관련 포스트</h1>
            <MagicContainer
              className={
                "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row flex-wrap"
              }
            >
              <MagicCard
                borderWidth={3}
                className="w-96 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
              >
                <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                  Magic
                </p>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
              </MagicCard>
              <MagicCard className="w-96 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
                <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                  Card
                </p>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
              </MagicCard>
              <MagicCard className="w-96 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
                <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                  Demo
                </p>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
              </MagicCard>
              <MagicCard className="w-96 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
                <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                  Demo
                </p>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
              </MagicCard>
              <MagicCard className="w-96 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl">
                <p className="z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200">
                  Demo
                </p>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
              </MagicCard>
            </MagicContainer>
          </div>
        </div>
      </main>
    </section>
  );
}
