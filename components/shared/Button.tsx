import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-ink shadow-sm hover:bg-gold-500 active:bg-gold-600 focus-visible:ring-gold-400",
        secondary:
          "bg-ink text-cream shadow-sm hover:bg-ink/80 active:bg-ink/90 focus-visible:ring-gold",
        outline:
          "border-2 border-ink/15 bg-white text-ink hover:bg-cream-200 active:bg-cream-300 focus-visible:ring-gold-400",
        ghost:
          "bg-transparent text-ink-light hover:bg-ink/5 active:bg-ink/10 focus-visible:ring-gold-400",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonStyleProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = ButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonStyleProps &
  Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    disabled?: boolean;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  const { className, variant, size, children } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if (typeof props.href === "string") {
    const { href, ...linkProps } = props;
    const isDisabled = Boolean(linkProps.disabled);

    return (
      <Link
        href={href}
        className={cn(classes, isDisabled && "pointer-events-none opacity-50")}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : linkProps.tabIndex}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
