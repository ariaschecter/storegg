import StepItem from "../../../../components/molecules/StepItem";
import type { Meta, StoryObj } from "@storybook/react";
// import React from "react";

const meta: Meta<typeof StepItem> = {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
};

export default meta;
type Story = StoryObj<typeof StepItem>;

export const Primary: Story = {
  args: {
    title: '1. Start',
    desc1: 'Desc1',
    desc2: 'Desc2',
    icon: "step1"
  },
};



