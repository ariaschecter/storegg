import GameItem from "../../../../components/molecules/GameItem";
import type { Meta, StoryObj } from "@storybook/react";
// import React from "react";

const meta: Meta<typeof GameItem> = {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
};

export default meta;
type Story = StoryObj<typeof GameItem>;

export const Primary: Story = {
  args: {
    title: 'Game 1',
    category: 'Desktop',
    thumbnail: 'Thumbnail-1',
  },
};



