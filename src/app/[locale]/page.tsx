import { getTranslations } from "next-intl/server";

import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Workflow } from "@/components/sections/workflow/workflow";
import { Skills } from "@/components/sections/skills/skills";
import { Experience } from "@/components/sections/experience/experience";
import { Projects } from "@/components/sections/projects/projects";
import { Contact } from "@/components/sections/contact/contact";
import { Footer } from "@/components/layout/footer";

export default async function HomePage() {
  const t = await getTranslations("common");

  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Workflow />
        <Skills />
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}
