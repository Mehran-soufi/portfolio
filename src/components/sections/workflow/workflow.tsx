import { Handshake, Lightbulb, Rocket, Wrench } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

export async function Workflow() {
  const t = await getTranslations("workflow");
  const locale = await getLocale();

  const isPersian = locale === "fa";

  return (
    <section
      id="workflow"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sunset-pink">
            {t("eyebrow")}
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Desktop roadmap */}
        <div className="relative mx-auto mt-24 hidden h-140 max-w-5xl lg:block">
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="absolute inset-10 -z-10 rounded-full bg-linear-to-r from-sunset-purple/5 via-sunset-pink/5 to-sunset-orange/5 blur-3xl"
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 1000 520"
            className="absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="workflow-road-gradient"
                x1="100"
                y1="80"
                x2="900"
                y2="440"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--sunset-purple)" stopOpacity="0.35" />

                <stop
                  offset="0.5"
                  stopColor="var(--sunset-pink)"
                  stopOpacity="0.75"
                />

                <stop
                  offset="1"
                  stopColor="var(--sunset-orange)"
                  stopOpacity="0.4"
                />
              </linearGradient>

              <filter
                id="workflow-road-glow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="6" result="blur" />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glow */}
            <path
              d={
                isPersian
                  ? "M900 100 H100 C65 100 40 125 40 160 V360 C40 395 65 420 100 420 H900"
                  : "M100 100 H900 C935 100 960 125 960 160 V360 C960 395 935 420 900 420 H100"
              }
              stroke="url(#workflow-road-gradient)"
              strokeWidth="14"
              strokeLinecap="round"
              opacity="0.1"
              filter="url(#workflow-road-glow)"
            />

            {/* Main route */}
            <path
              d={
                isPersian
                  ? "M900 100 H100 C65 100 40 125 40 160 V360 C40 395 65 420 100 420 H900"
                  : "M100 100 H900 C935 100 960 125 960 160 V360 C960 395 935 420 900 420 H100"
              }
              stroke="url(#workflow-road-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 9"
            />
          </svg>

          {/* Node 1 */}
          <div
            className={`group absolute top-25 ${
              isPersian ? "right-[4%]" : "left-[4%]"
            } -translate-y-1/2`}
          >
            <div
              className={`w-64 sm:w-72 ${
                isPersian ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`flex size-14 items-center justify-center rounded-full border border-sunset-pink/30 bg-card text-sunset-pink shadow-[0_0_0_6px_rgba(139,92,246,0.04)] transition-all duration-300 group-hover:scale-110 group-hover:border-sunset-pink/60 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.22)] ${
                  isPersian ? "ml-auto" : ""
                }`}
              >
                <Rocket className="size-5" strokeWidth={1.8} />
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-sunset-pink">
                  {t("steps.build.number")}
                </p>

                <h3 className="mt-1 text-xl font-bold text-foreground">
                  {t("steps.build.title")}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {t("steps.build.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Node 2 */}
          <div
            className={`group absolute top-25 ${
              isPersian ? "left-[4%]" : "right-[4%]"
            } -translate-y-1/2`}
          >
            <div
              className={`w-64 sm:w-72 ${
                isPersian ? "text-right" : "text-right"
              }`}
            >
              <div
                className={`flex size-14 items-center justify-center rounded-full border border-sunset-pink/30 bg-card text-sunset-pink shadow-[0_0_0_6px_rgba(139,92,246,0.04)] transition-all duration-300 group-hover:scale-110 group-hover:border-sunset-pink/60 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.22)] ${
                  isPersian ? "" : "ml-auto"
                }`}
              >
                <Lightbulb className="size-5" strokeWidth={1.8} />
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-sunset-pink">
                  {t("steps.solve.number")}
                </p>

                <h3 className="mt-1 text-xl font-bold text-foreground">
                  {t("steps.solve.title")}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {t("steps.solve.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Node 3 */}
          <div
            className={`group absolute top-105 ${
              isPersian ? "left-[4%]" : "right-[4%]"
            } -translate-y-1/2`}
          >
            <div
              className={`w-64 sm:w-72 ${
                isPersian ? "text-right" : "text-right"
              }`}
            >
              <div
                className={`flex size-14 items-center justify-center rounded-full border border-sunset-pink/30 bg-card text-sunset-pink shadow-[0_0_0_6px_rgba(139,92,246,0.04)] transition-all duration-300 group-hover:scale-110 group-hover:border-sunset-pink/60 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.22)] ${
                  isPersian ? "" : "ml-auto"
                }`}
              >
                <Wrench className="size-5" strokeWidth={1.8} />
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-sunset-pink">
                  {t("steps.improve.number")}
                </p>

                <h3 className="mt-1 text-xl font-bold text-foreground">
                  {t("steps.improve.title")}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {t("steps.improve.description")}
                </p>
              </div>
            </div>
          </div>

          {/* Node 4 */}
          <div
            className={`group absolute top-105 ${
              isPersian ? "right-[4%]" : "left-[4%]"
            } -translate-y-1/2`}
          >
            <div
              className={`w-64 sm:w-72 ${
                isPersian ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`flex size-14 items-center justify-center rounded-full border border-sunset-pink/30 bg-card text-sunset-pink shadow-[0_0_0_6px_rgba(139,92,246,0.04)] transition-all duration-300 group-hover:scale-110 group-hover:border-sunset-pink/60 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.22)] ${
                  isPersian ? "ml-auto" : ""
                }`}
              >
                <Handshake className="size-5" strokeWidth={1.8} />
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-sunset-pink">
                  {t("steps.collaborate.number")}
                </p>

                <h3 className="mt-1 text-xl font-bold text-foreground">
                  {t("steps.collaborate.title")}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {t("steps.collaborate.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="relative mx-auto mt-16 max-w-xl lg:hidden">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-7 top-8 w-px bg-linear-to-b from-sunset-purple/30 via-sunset-pink/60 to-sunset-orange/30"
          />

          <div className="relative space-y-12">
            {[
              {
                key: "build",
                icon: Rocket,
              },
              {
                key: "solve",
                icon: Lightbulb,
              },
              {
                key: "improve",
                icon: Wrench,
              },
              {
                key: "collaborate",
                icon: Handshake,
              },
            ].map(({ key, icon: Icon }) => (
              <div key={key} className="relative flex gap-5">
                <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-sunset-pink/30 bg-card text-sunset-pink shadow-lg shadow-sunset-purple/10">
                  <Icon className="size-5" strokeWidth={1.8} />
                </div>

                <div className="pt-1">
                  <p className="text-xs font-semibold tracking-[0.2em] text-sunset-pink">
                    {t(`steps.${key}.number`)}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-foreground">
                    {t(`steps.${key}.title`)}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {t(`steps.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
