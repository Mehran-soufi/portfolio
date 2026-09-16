import { GraduationCap, Languages, Layers3, Monitor } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function AboutInfoCard() {
  const t = await getTranslations("about.info");

  const items = [
    {
      icon: GraduationCap,
      label: t("education.label"),
      value: t("education.value"),
    },
    {
      icon: Monitor,
      label: t("focus.label"),
      value: t("focus.value"),
    },
    {
      icon: Layers3,
      label: t("technologies.label"),
      value: t("technologies.value"),
    },
    {
      icon: Languages,
      label: t("languages.label"),
      value: t("languages.value"),
    },
  ];

  return (
    <div className="relative">
      {/* Sunset glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-3xl bg-linear-to-br from-sunset-purple/10 via-sunset-pink/10 to-sunset-orange/10 blur-3xl"
      />

      {/* Card */}
      <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sunset-purple/15 via-sunset-pink/15 to-sunset-orange/10 text-sunset-pink">
                <Icon className="size-5" strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-foreground">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
