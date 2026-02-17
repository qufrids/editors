import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-500",
        secondary:
          "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 focus-visible:ring-navy-500",
        outline:
          "border border-primary-600 bg-white text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500",
        ghost:
          "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-400",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-6 text-base",
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
