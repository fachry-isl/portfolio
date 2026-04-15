import React from "react";
import { cn } from "@/lib/utils";

// ─── Shared prop type ────────────────────────────────────────────────────────

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

const TypographyH1 = ({ children, className, ...props }: TypographyProps) => (
  <h1
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className,
    )}
    {...props}
  >
    {children}
  </h1>
);

const TypographyH2 = ({ children, className, ...props }: TypographyProps) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className,
    )}
    {...props}
  >
    {children}
  </h2>
);

// H3: merged "mt-8" from file 2 with base classes from file 1
const TypographyH3 = ({ children, className, ...props }: TypographyProps) => (
  <h3
    className={cn(
      "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h3>
);

const TypographyH4 = ({ children, className, ...props }: TypographyProps) => (
  <h4
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      className,
    )}
    {...props}
  >
    {children}
  </h4>
);

// P: uses <p> tag (file 1 semantics); kept "not-first:mt-6" from file 1 over file 2's <div>
const TypographyP = ({ children, className, ...props }: TypographyProps) => (
  <p
    className={cn("leading-7 not-first:mt-6", className)}
    {...(props as React.HTMLAttributes<HTMLParagraphElement>)}
  >
    {children}
  </p>
);

const TypographySmall = ({
  children,
  className,
  ...props
}: TypographyProps) => (
  <small
    className={cn("text-sm font-medium leading-none", className)}
    {...(props as React.HTMLAttributes<HTMLElement>)}
  >
    {children}
  </small>
);

const TypographyMuted = ({
  children,
  className,
  ...props
}: TypographyProps) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    {...(props as React.HTMLAttributes<HTMLParagraphElement>)}
  >
    {children}
  </p>
);

// Blockquote: from file 2 (not present in file 1)
const TypographyBlockquote = ({
  children,
  className,
  ...props
}: TypographyProps) => (
  <blockquote
    className={cn("mt-6 border-l-2 pl-6 italic", className)}
    {...(props as React.HTMLAttributes<HTMLQuoteElement>)}
  >
    {children}
  </blockquote>
);

// ─── Namespace object ────────────────────────────────────────────────────────

const Typography = () => null;

Typography.H1 = TypographyH1;
Typography.H2 = TypographyH2;
Typography.H3 = TypographyH3;
Typography.H4 = TypographyH4;
Typography.P = TypographyP;
Typography.Small = TypographySmall;
Typography.Muted = TypographyMuted;
Typography.Blockquote = TypographyBlockquote;

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographySmall,
  TypographyMuted,
  TypographyBlockquote,
};
export { Typography };
export default Typography;
