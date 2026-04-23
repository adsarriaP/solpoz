"use client";

import { useInView } from "@/hooks/useInView";

type Animation = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "zoom";

interface AnimateProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;      // ms
  duration?: number;   // ms
  className?: string;
  threshold?: number;
}

const animationBase: Record<Animation, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  zoom: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
};

export function Animate({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.12,
}: AnimateProps) {
  const { ref, inView } = useInView({ threshold });
  const { hidden, visible } = animationBase[animation];

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : "0ms",
      }}
      className={`transition-all ease-out ${inView ? visible : hidden} ${className}`}
    >
      {children}
    </div>
  );
}
