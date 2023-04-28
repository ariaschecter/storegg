import Input from "../../../../components/atoms/input";
import type { Meta, StoryObj } from "@storybook/react";
// import React from "react";

const meta: Meta<typeof Input> = {
  title: 'Components/Atoms/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: 'Nama Lengkap',
  },
};



