import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const heroButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-gradient-hero text-aerox-blue font-bold hover:scale-105 hover:shadow-lg transform-gpu duration-300 shadow-[0_0_20px_hsl(var(--aerox-orange)/0.3)]",
        secondary: "border border-primary bg-background/10 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:text-primary",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-6",
        md: "h-11 px-8 py-2 text-sm",
        lg: "h-14 px-12 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {
  asChild?: boolean
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
HeroButton.displayName = "HeroButton"

export { HeroButton, heroButtonVariants }
