import { getTranslations } from "next-intl/server";

import { Header } from "@/components/layout/header";

export default async function HomePage() {
  const t = await getTranslations("common");

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto flex min-h-[60vh] max-w-7xl items-center px-5 py-20 md:px-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              {t("siteName")}
            </h1>

            <p className="mt-4 text-muted-foreground">
              Internationalization is working.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
