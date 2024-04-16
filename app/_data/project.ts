interface Project {
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

export const Project: Project[] = [
  {
    title: "MogakGO!",
    description:
      "단순하고 친목의 부담감이 없는 게이미피케이션 요소가 가미된 일회성 위치 기반의 1:1 모각코 매칭 서비스",
    githubLink: "https://github.com/Open-Eye-Im-Developer",
    demoLink: "https://mogak-go.vercel.app/",
  },
  {
    title: "Uket",
    description:
      "대학 축제와 공연 웨이팅의 소요시간을 해소하는 QR코드 기반 티켓팅 서비스",
    githubLink: "https://github.com/lunarmoon7/weather-nextjs",
    demoLink: "https://weather-nextjs.pages.dev/",
  },
  {
    title: "Buddies",
    description: "사용자 맞춤형 고민상담 챗봇 서비스",
    githubLink: "https://github.com/lunarmoon7/Buddies-NextJS",
    demoLink: "",
  },
  {
    title: "Dev Blog",
    description: "재빌드와 재배포 프로세스를 생략한 개인 블로그",
    githubLink: "https://github.com/lunarmoon7/zentechie-blog",
    demoLink: "https://coggie.dev",
  },
];
