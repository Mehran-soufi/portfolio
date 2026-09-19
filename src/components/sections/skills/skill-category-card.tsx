import {Code2, FileCode2, type LucideIcon} from 'lucide-react';

import {SkillItem} from './skill-item';
import {getSkillIcon} from './skill-icons';

type SkillCategoryCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
};

export function SkillCategoryCard({
  icon: Icon,
  title,
  description,
  skills,
}: SkillCategoryCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 shadow-xl shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sunset-pink/30 hover:shadow-[0_20px_60px_-30px_rgba(236,72,153,0.25)] sm:p-7">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-52 rounded-full bg-sunset-purple/10 blur-3xl transition-all duration-500 group-hover:bg-sunset-pink/15"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 size-48 rounded-full bg-sunset-orange/5 blur-3xl"
      />

      <div className="relative">
        {/* Category heading */}
        <div className="flex items-start gap-4">
          <div className="relative flex size-13 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-sunset-purple/15 via-sunset-pink/15 to-sunset-orange/10 text-sunset-pink">
            <Icon className="size-5.5" strokeWidth={1.7} />

            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-bold text-foreground sm:text-xl">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="my-7 flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-sunset-pink" />

          <span
            aria-hidden="true"
            className="h-px flex-1 bg-linear-to-r from-sunset-purple/30 via-sunset-pink/20 to-transparent"
          />
        </div>

        {/* Technology showcase */}
        <div className="grid grid-cols-2 gap-3">
          {skills.map((skill) => {
            const icon = getSkillIcon(skill);

            if (!icon && skill !== 'VS Code') {
              return null;
            }

            return (
              <SkillItem
                key={skill}
                name={skill}
                icon={
                  icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="size-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={icon.path} />
                    </svg>
                  ) : (
                    <FileCode2
                      className="size-6"
                      strokeWidth={1.7}
                    />
                  )
                }
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}