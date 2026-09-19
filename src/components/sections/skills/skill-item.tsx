import type {ReactNode} from 'react';

type SkillItemProps = {
  name: string;
  icon: ReactNode;
};

export function SkillItem({name, icon}: SkillItemProps) {
  return (
    <div className="group/item relative flex min-h-28 flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/40 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sunset-pink/40 hover:bg-background/70">
      {/* Sunset glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-linear-to-r from-sunset-purple/20 via-sunset-pink/15 to-sunset-orange/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover/item:opacity-100"
      />

      {/* Icon */}
      <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground shadow-sm transition-all duration-300 group-hover/item:scale-105 group-hover/item:border-sunset-pink/30 group-hover/item:text-sunset-pink">
        {icon}
      </div>

      {/* Name */}
      <span className="mt-3 text-sm font-semibold text-foreground">
        {name}
      </span>

      {/* Bottom accent */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 h-px w-0 bg-linear-to-r from-sunset-purple via-sunset-pink to-sunset-orange transition-all duration-300 group-hover/item:w-1/2"
      />
    </div>
  );
}