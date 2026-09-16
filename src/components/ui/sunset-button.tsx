'use client';

import * as React from 'react';

import {cn} from '@/lib/utils';

type SunsetButtonProps = React.ComponentProps<'button'>;

export function SunsetButton({
  className,
  children,
  onMouseMove,
  onMouseLeave,
  ...props
}: SunsetButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const button = buttonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      button.style.setProperty('--mouse-x', `${x}px`);
      button.style.setProperty('--mouse-y', `${y}px`);
    }

    onMouseMove?.(event);
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onMouseLeave?.(event);
  };

  return (
    <button
      {...props}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative inline-flex cursor-pointer overflow-hidden rounded-md border border-white/10 bg-transparent p-0 text-white',
        'shadow-lg shadow-sunset-purple/20',
        'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sunset-purple/30',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset-pink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
    >
      {/* Base gradient */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-sunset-purple via-sunset-pink to-sunset-orange"
      />

      {/* Mouse-follow glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle 90px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.38), rgba(251,191,36,0.22) 35%, transparent 70%)',
        }}
      />

      {/* Soft outer glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
        style={{
          background:
            'radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), rgba(236,72,153,0.65), rgba(139,92,246,0.3) 45%, transparent 75%)',
        }}
      />

      {/* Content */}
      <span className="relative z-10 px-5 py-3 font-medium">
        {children}
      </span>
    </button>
  );
}