interface Project {
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

export const Project: Project[] = [
  {
    title: 'Buddies',
    description: 'A Customized AI Chatbot Service',
    githubLink: 'https://github.com/lunarmoon7/Buddies-NextJS',
    demoLink: '',
  },
  {
    title: 'Nution-Notion Clone',
    description: 'A Notion Clone with VanillaJS',
    githubLink: 'https://github.com/lunarmoon7/Nution-Notion_Cloning',
    demoLink: 'https://zentechie-nution.netlify.app/',
  },
  {
    title: 'Weather App',
    description: 'A Weather App with NextJS',
    githubLink: 'https://github.com/lunarmoon7/weather-nextjs',
    demoLink: 'https://weather-nextjs.pages.dev/',
  },
  {
    title: 'Dev Blog',
    description: 'A Dev Blog with NextJS, MDX, GraphQL',
    githubLink: 'https://github.com/lunarmoon7/zentechie-blog',
    demoLink: 'https://coggie.dev',
  },
];
