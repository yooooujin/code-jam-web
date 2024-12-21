import { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    children: "Typography",
  },
};

export default meta;

export const Default: Story = {};

export const Heading1: Story = {
  args: {
    as: "h1",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
  },
};

export const Heading3: Story = {
  args: {
    as: "h3",
  },
};

export const Heading4: Story = {
  args: {
    as: "h4",
  },
};

export const Heading5: Story = {
  args: {
    as: "h5",
  },
};

export const Heading6: Story = {
  args: {
    as: "h6",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
  },
};

export const Span: Story = {
  args: {
    as: "span",
  },
};

export const Transparent: Story = {
  args: {
    color: "transparent",
  },
};

export const Current: Story = {
  args: {
    color: "current",
  },
};

export const Foreground: Story = {
  args: {
    color: "foreground",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Muted: Story = {
  args: {
    color: "muted",
  },
};

export const Accent: Story = {
  args: {
    color: "accent",
  },
};

export const Success: Story = {
  args: {
    color: "success",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
};

export const Info: Story = {
  args: {
    color: "info",
  },
};
