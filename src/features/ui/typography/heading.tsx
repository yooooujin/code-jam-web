import { cn } from "@/shared/libs/utils";
import { cva } from "class-variance-authority";
import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingColor = "foreground" | "primary" | "secondary" | "accent" | "muted";

export interface HeadingProps {
  level?: HeadingLevel;
  color?: HeadingColor;
  className?: ClassValue;
}

const Heading = ({
  level = 1,
  color = "foreground",
  className,
  children,
}: PropsWithChildren<HeadingProps>) => {
  const Tag = `h${level}` as const;

  return (
    <Tag className={cn(styles({ level, color }), className)}>{children}</Tag>
  );
};

export default Heading;

const styles = cva("leading-normal scroll-m-20", {
  variants: {
    level: {
      1: "text-4xl font-extrabold lg:text-5xl",
      2: "text-3xl font-bold",
      3: "text-2xl font-semibold",
      4: "text-xl font-semibold",
    },
    color: {
      foreground: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      muted: "text-muted",
    },
  },
});
