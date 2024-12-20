import { cva } from "class-variance-authority";

interface TextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?:
    | "transparent"
    | "current"
    | "foreground"
    | "primary"
    | "secondary"
    | "muted"
    | "accent"
    | "success"
    | "danger"
    | "warning"
    | "info";
  children: React.ReactNode | string;
}

const textVariants = cva("font-mono", {
  variants: {
    as: {
      h1: "text-2xl font-bold",
      h2: "text-xl font-bold",
      h3: "text-lg font-bold",
      h4: "text-base font-bold",
      h5: "text-sm font-bold",
      h6: "text-xs font-bold",
      p: "text-base",
      span: "text-base",
    },
    color: {
      transparent: "text-transparent",
      current: "text-current",
      foreground: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted",
      accent: "text-accent",
      success: "text-success",
      danger: "text-danger",
      warning: "text-warning",
      info: "text-info",
    },
  },
  defaultVariants: {
    as: "span",
    color: "foreground",
  },
});

const Text = (props: TextProps) => {
  const { as, color, children } = props;
  const Comp = as || "span";

  return <Comp className={textVariants({ as, color })}>{children}</Comp>;
};

Text.displayName = "Text";

export { Text };
