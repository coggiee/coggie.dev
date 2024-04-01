interface Project {
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

export const Project: Project[] = [
  {
    title: "MogakGO",
    description:
      "Region-based Mogakko Matching Service with Gamification Elements",
    githubLink: "https://github.com/Open-Eye-Im-Developer",
    demoLink: "https://mogak-go.vercel.app/",
  },
  {
    title: "Buddies",
    description: "A Customized AI Chatbot Service",
    githubLink: "https://github.com/lunarmoon7/Buddies-NextJS",
    demoLink: "",
  },
  {
    title: "Weather App",
    description: "A Weather App with NextJS",
    githubLink: "https://github.com/lunarmoon7/weather-nextjs",
    demoLink: "https://weather-nextjs.pages.dev/",
  },
  {
    title: "Dev Blog",
    description: "A Dev Blog with NextJS, MDX, GraphQL",
    githubLink: "https://github.com/lunarmoon7/zentechie-blog",
    demoLink: "https://coggie.dev",
  },
];
