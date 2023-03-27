import React from "react";
import Chip from ".";
import { Meta, Story } from "@storybook/react/types-6-0";
export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    type: {
      options: ["scheduled", "consider", "clear"],
      control: { type: "radio" },
    },
  },
} as Meta;
const Template: Story<React.ComponentProps<typeof Chip>> = (args) => (
  <Chip {...args} />
);
export const ChipScheduled = Template.bind({});
ChipScheduled.args = { type: "scheduled" };
export const ChipConsider = Template.bind({});
ChipConsider.args = { type: "consider" };
export const ChipClear = Template.bind({});
ChipClear.args = { type: "clear" };
