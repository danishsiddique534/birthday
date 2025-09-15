import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";

interface MagicalButtonProps {
  children: ReactNode;
  variant?: "magical" | "celebration" | "soft";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const MagicalButton = forwardRef<HTMLButtonElement, MagicalButtonProps>(
  ({ children, variant = "magical", size = "md", className, ...props }, ref) => {
    const variants = {
      magical: "bg-gradient-magical hover:shadow-magical border-0 text-primary-foreground hover:scale-105",
      celebration: "bg-gradient-celebration hover:shadow-glow border-0 text-primary-foreground hover:scale-105", 
      soft: "bg-gradient-card hover:bg-secondary border border-border text-foreground hover:scale-105"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "transition-all duration-300 font-semibold rounded-2xl shadow-lg",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

MagicalButton.displayName = "MagicalButton";

export default MagicalButton;