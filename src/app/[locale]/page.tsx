import { getTranslations } from "next-intl/server";

import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Workflow } from "@/components/sections/workflow/workflow";
import { Skills } from "@/components/sections/skills/skills";

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
      </main>
    </>
  );
}
