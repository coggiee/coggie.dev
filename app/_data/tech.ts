interface Tech {
  title: string;
  description: string[];
  icon?: string;
}

export const tech: Tech[] = [
  {
    title: 'HTML/CSS',
    description: [
      'semantic markup',
      'accessibility',
      'responsive design',
      'Sass',
      'Bootstrap',
    ],
  },
  {
    title: 'JavaScript',
    description: [
      'ES6+',
      'vanilla JS',
      'async/await',
      'DOM manipulation',
      'Promise'
    ],
  },
  {
    title: 'TypeScript',
    description: [
      'handling type',
      'interface',
      'type alias',
    ]
  },
  {
    title: 'Framework',
    description: [
      'React',
      'Next.js',
      'Gatsby',
      'Redux',
      'styled-components',
    ],
  }
];
