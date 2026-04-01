import React from "react";
import { cn } from "@/lib/utils";

export const Typography = {
  H1: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  ),
  H2: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  ),
  H3: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  ),
  H4: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  ),
  P: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <p className={cn("leading-7 not-first:mt-6", className)}>{children}</p>,
  Small: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  ),
  Muted: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  ),
};

export default Typography;
