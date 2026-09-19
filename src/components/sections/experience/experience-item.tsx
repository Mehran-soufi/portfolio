import {MapPin} from 'lucide-react';
import type {ReactNode} from 'react';

type ExperienceItemProps = {
  date: string;
  company: string;
  role: string;
  description?: string;
  responsibilities?: string[];
  location?: string;
  icon: ReactNode;
};

export function ExperienceItem({
  date,
  company,
  role,
  description,
  responsibilities,
  location,
  icon,
}: ExperienceItemProps) {
  return (
    <article className="group relative grid gap-5 md:grid-cols-[180px_1fr] md:gap-10">
      {/* Timeline node */}
      <div
        aria-hidden="true"
        className="absolute -left-1.25 top-1.5 z-10 hidden size-3 rounded-full border-2 border-background bg-sunset-pink shadow-[0_0_0_4px_rgba(236,72,153,0.12),0_0_20px_rgba(236,72,153,0.35)] md:block rtl:left-auto rtl:-right-1.25"
/>
      {/* Date */}
      <div className="md:pt-1">
        <p className="text-sm font-semibold leading-6 text-sunset-pink p-3">
          {date}
        </p>
      </div>

      {/* Content */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 shadow-xl shadow-black/5 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sunset-pink/30 group-hover:shadow-[0_20px_60px_-30px_rgba(236,72,153,0.25)] sm:p-7">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 size-40 rounded-full bg-sunset-purple/10 blur-3xl transition-colors duration-500 group-hover:bg-sunset-pink/15"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 size-40 rounded-full bg-sunset-orange/5 blur-3xl"
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {company}
              </h3>

              <p className="mt-1 text-sm font-medium text-sunset-pink">
                {role}
              </p>

              {location ? (
                <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin
                    className="size-4 shrink-0"
                    strokeWidth={1.8}
                  />
                  <span>{location}</span>
                </div>
              ) : null}
            </div>

            <div className="hidden size-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sunset-purple/15 via-sunset-pink/15 to-sunset-orange/10 text-sunset-pink sm:flex">
              {icon}
            </div>
          </div>

          {description ? (
            <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}

          {responsibilities?.length ? (
            <ul className="mt-5 space-y-3">
              {responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex items-start gap-3 text-sm leading-7 text-muted-foreground sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 size-1.5 shrink-0 rounded-full bg-linear-to-r from-sunset-purple to-sunset-pink"
                  />

                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}