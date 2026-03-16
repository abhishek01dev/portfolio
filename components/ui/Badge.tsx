import React from 'react';
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'tech';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: "bg-blue-600/20 text-blue-400 border border-blue-600/30",
    secondary: "bg-neutral-800 text-neutral-300 border border-transparent",
    outline: "text-neutral-400 border border-neutral-700",
    tech: "bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-colors"
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
