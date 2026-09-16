import { getTranslations } from "next-intl/server";

import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";

export default async function HomePage() {
  const t = await getTranslations("common");

  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <About/>
      </main>
    </>
  );
}
