import { cn } from "@/lib/utils";

type TextProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
};

export const H1 = ({ className, children, ...props }: TextProps) => (
  <h1 className={cn("text-h1 font-bold", className)} {...props}>
    {children}
  </h1>
);

export const H2 = ({ className, children, ...props }: TextProps) => (
  <h2 className={cn("text-h2 font-semibold", className)} {...props}>
    {children}
  </h2>
);

export const Paragraph = ({ className, children, ...props }: TextProps) => (
  <p className={cn("text-body text-muted-foreground", className)} {...props}>
    {children}
  </p>
);

export const Small = ({ className, children, ...props }: TextProps) => (
  <small className={cn("text-small text-muted-foreground", className)} {...props}>
    {children}
  </small>
);
