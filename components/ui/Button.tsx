import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 transition-all active:scale-95";
    
    const variants = {
      primary: "bg-blue-600 text-white shadow hover:bg-blue-600/90 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]",
      secondary: "bg-neutral-800 text-neutral-100 shadow-sm hover:bg-neutral-800/80 border border-neutral-700",
      outline: "border border-neutral-700 bg-transparent shadow-sm hover:bg-neutral-800 hover:text-white",
      ghost: "hover:bg-neutral-800 hover:text-neutral-100",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-6 py-2",
      lg: "h-12 px-8 text-base",
    };

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
