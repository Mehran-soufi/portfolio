'use client';

import {useEffect, useRef} from 'react';

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({x: 0, y: 0});
  const targetRef = useRef({x: 0, y: 0});
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    const mediaQuery = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    );

    if (!mediaQuery.matches) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      targetRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const animate = () => {
      const current = positionRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-9999 hidden size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sunset-pink/40 bg-sunset-purple/5 shadow-[0_0_24px_rgba(236,72,153,0.12)] md:block"
    />
  );
}