import {Header} from '@/components/layout/header';
import {Hero} from '@/components/sections/hero/hero';
import {Workflow} from '@/components/sections/workflow/workflow';
import {Skills} from '@/components/sections/skills/skills';
import {Experience} from '@/components/sections/experience/experience';
import {Projects} from '@/components/sections/projects/projects';
import {Contact} from '@/components/sections/contact/contact';
import {Footer} from '@/components/layout/footer';

export function generateStaticParams() {
  return [{locale: 'fa'}, {locale: 'en'}];
}

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <Workflow />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}