import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";

import { HeroCodeEditor } from "./hero-code-editor";

import { SunsetButton } from "@/components/ui/sunset-button";

import { HeroPhoto } from "./hero-photo";

export async function Hero() {
  const t = await getTranslations("hero");
  const locale = await getLocale();

  const isPersian = locale === "fa";

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* Content */}
        <div className="max-w-2xl">
          <p className="mb-4 text-lg font-medium text-sunset-pink">
            {t("eyebrow")}
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t("name")}
          </h1>

          <p className="mt-5 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
            {t("role")}
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SunsetButton>{t("viewProjects")}</SunsetButton>

            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-border bg-transparent transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-hover"
            >
              {t("contact")}
            </Button>
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex min-h-125 w-full items-center justify-center lg:min-h-150">
          {/* Photo */}
          <div
            className={`
      relative z-10 w-[68%] max-w-sm
      ${isPersian ? "lg:mr-auto lg:ml-0" : "lg:ml-auto lg:mr-0"}
    `}
          >
            <HeroPhoto />
          </div>

          {/* Code Editor */}
          <div
            className={`
      absolute top-[30%] z-20 w-[58%] max-w-md
      -translate-y-1/2
      ${isPersian ? "right-0" : "left-0"}
      lg:top-[24%] lg:w-[52%]
    `}
          >
            <HeroCodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
}
