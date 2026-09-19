export type Project = {
  slug: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'toolbox',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare'],
    image: '/images/projects/toolbox.webp',
    liveUrl: 'https://toolbox-app.mehransoufi33.workers.dev/',
    githubUrl: 'https://github.com/Mehran-soufi/toolbox_app',
  },
  {
    slug: 'movienet',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/projects/movienet.webp',
    liveUrl: 'https://movienet-nextjs-soufi.vercel.app',
    githubUrl: 'https://github.com/Mehran-soufi/movienet-nextjs',
  },
  {
    slug: 'portfolio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'next-intl'],
    image: '/images/projects/portfolio.webp',
    liveUrl: 'https://toolbox-app.mehransoufi33.workers.dev/',
    githubUrl: 'https://github.com/Mehran-soufi/portfolio',
  },
];