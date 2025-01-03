import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./button";
import { ReactNode } from "react";
import Text from "../typography/text";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    size: "medium",
    variant: "rounded",
  },
};

export default meta;

const createButtonStory = (
  size: ButtonProps["size"],
  variant: ButtonProps["variant"],
  children: ReactNode
): Story => ({
  args: { size, variant, children },
});

const MediumButton = createButtonStory(
  "medium",
  "rounded",
  <Text>Medium Button</Text>
);
const SmallButton = createButtonStory(
  "small",
  "rounded",
  <Text size="small">Small Button</Text>
);
const LargeButton = createButtonStory(
  "large",
  "rounded",
  <Text size="large">Large Button</Text>
);

const RoundedButton = createButtonStory(
  "medium",
  "rounded",
  <Text>Rounded Button</Text>
);
const OutlineButton = createButtonStory(
  "medium",
  "outline",
  <Text>Outline Button</Text>
);
const SecondaryButton = createButtonStory(
  "medium",
  "secondary",
  <Text>Secondary Button</Text>
);
const GhostButton = createButtonStory(
  "medium",
  "ghost",
  <Text>Ghost Button</Text>
);

export {
  MediumButton,
  SmallButton,
  LargeButton,
  RoundedButton,
  OutlineButton,
  SecondaryButton,
  GhostButton,
};
