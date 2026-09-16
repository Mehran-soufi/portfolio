import { getTranslations } from "next-intl/server";

export async function HeroCodeEditor() {
  const t = await getTranslations("hero");

  return (
    <div className="relative w-full max-w-xl" dir="ltr">
      {/* Sunset glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-linear-to-r from-sunset-purple/20 via-sunset-pink/15 to-sunset-orange/20 blur-3xl"
      />

      {/* Editor window */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl shadow-black/20">
        {/* Window header */}
        <div className="flex h-12 items-center border-b border-white/10 px-4">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-red-400/80" />
            <span className="size-3 rounded-full bg-yellow-400/80" />
            <span className="size-3 rounded-full bg-green-400/80" />
          </div>

          <div className="ml-4 text-xs text-muted-foreground">
            {t("codeFile")}
          </div>
        </div>

        {/* Code */}
        <div className="overflow-x-auto p-4 font-mono text-xs leading-6 sm:text-sm">
          <div className="grid grid-cols-[2rem_1fr] gap-4">
            <div
              aria-hidden="true"
              className="select-none text-right text-muted-foreground/40"
            >
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>

            <code className="whitespace-nowrap">
              <div>
                <span className="text-sunset-purple">const</span>{" "}
                <span className="text-sunset-pink">developer</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-sunset-purple">{"{"}</span>
              </div>

              <div className="pl-4">
                <span className="text-sunset-pink">name</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-sunset-gold">
                  &quot;Mehran Soufi&quot;
                </span>
                <span className="text-muted-foreground">,</span>
              </div>

              <div className="pl-4">
                <span className="text-sunset-pink">role</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-sunset-gold">
                  &quot;Computer Engineer&quot;
                </span>
                <span className="text-muted-foreground">,</span>
              </div>

              <div className="pl-4">
                <span className="text-sunset-pink">focus</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-sunset-gold">
                  &quot;Web Development&quot;
                </span>
                <span className="text-muted-foreground">,</span>
              </div>

              <div className="pl-4">
                <span className="text-sunset-pink">mindset</span>
                <span className="text-muted-foreground">:</span>{" "}
                <span className="text-sunset-gold">
                  &quot;Problem Solver&quot;
                </span>
                <span className="text-muted-foreground">,</span>
              </div>

              <div>
                <span className="text-sunset-purple">{"}"}</span>
                <span className="text-muted-foreground">;</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
