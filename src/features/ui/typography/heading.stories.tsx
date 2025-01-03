import { Meta, StoryObj } from "@storybook/react";
import Heading, { HeadingProps } from "./heading";

type Story = StoryObj<typeof Heading>;

const meta: Meta<typeof Heading> = {
  component: Heading,
  args: {
    color: "foreground",
  },
};

export default meta;

const createHeadingStory = (
  level: HeadingProps["level"],
  children: string
): Story => ({
  args: { level, children },
});

const Heading1 = createHeadingStory(1, "Heading 1");
const Heading2 = createHeadingStory(2, "Heading 2");
const Heading3 = createHeadingStory(3, "Heading 3");
const Heading4 = createHeadingStory(4, "Heading 4");

export { Heading1, Heading2, Heading3, Heading4 };
