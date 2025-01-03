import { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./text";

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    size: "medium",
    color: "foreground",
    children: "Text",
  },
};

export default meta;

const createTextStory = (
  size: TextProps["size"],
  color: TextProps["color"],
  children: string
): Story => ({
  args: { size, color, children },
});

const SmallText = createTextStory("small", "foreground", "Small Text");
const MediumText = createTextStory("medium", "foreground", "Medium Text");
const LargeText = createTextStory("large", "foreground", "Large Text");

export { SmallText, MediumText, LargeText };
