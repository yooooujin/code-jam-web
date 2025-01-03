import { cn } from "@/shared/libs/utils";
import { cva } from "class-variance-authority";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

type TextSize = "small" | "medium" | "large";
type TextColor =
  | "inherit"
  | "foreground"
  | "primary"
  | "secondary"
  | "accent"
  | "muted"
  | "error"
  | "success"
  | "warning";

export interface TextProps {
  size?: TextSize;
  color?: TextColor;
  className?: ClassValue;
}

const Text = ({
  size = "medium",
  color = "inherit",
  className,
  children,
}: PropsWithChildren<TextProps>) => {
  return (
    <span className={cn(styles({ size, color }), className)}>{children}</span>
  );
};

export default Text;

const styles = cva("leading-normal", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    color: {
      inherit: "text-inherit",
      foreground: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      muted: "text-muted",
      error: "text-error",
      success: "text-success",
      warning: "text-warning",
    },
  },
});
