import type {LucideIcon} from 'lucide-react';

type WorkflowStepProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  align: 'left' | 'right';
};

export function WorkflowStep({
  number,
  title,
  description,
  icon: Icon,
  align,
}: WorkflowStepProps) {
  return (
    <div
      className={`absolute w-64 sm:w-72 ${
        align === 'left'
          ? 'text-left'
          : 'text-right'
      }`}
    >
      <div
        className={`flex size-14 items-center justify-center rounded-full border border-sunset-pink/30 bg-card text-sunset-pink shadow-[0_0_0_6px_rgba(139,92,246,0.04)] transition-all duration-300 group-hover:scale-110`}
      >
        <Icon className="size-5" strokeWidth={1.8} />
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold tracking-[0.2em] text-sunset-pink">
          {number}
        </p>

        <h3 className="mt-1 text-xl font-bold text-foreground">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}