import {
  siAxios,
  siBootstrap,
  siCss,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siReact,
  siSass,
  siShadcnui,
  siTailwindcss,
  siTypescript,
} from 'simple-icons/icons';

const iconMap = {
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML: siHtml5,
  CSS: siCss,
  Sass: siSass,
  'Next.js': siNextdotjs,
  'Tailwind CSS': siTailwindcss,
  'shadcn/ui': siShadcnui,
  Bootstrap: siBootstrap,
  Git: siGit,
  GitHub: siGithub,
  Axios: siAxios,
} as const;

export type SkillName = keyof typeof iconMap;

export function getSkillIcon(name: string) {
  return iconMap[name as SkillName];
}