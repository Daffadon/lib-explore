import type { ComponentProps } from "react";
import Navbar from "../components/appbar/navbar/Navbar";
import type { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Navbar>;

const meta: Meta<StoryProps> = {
  title: "Template/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["fixed", "scrolled"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultNavbar: Story = {
  args: {
    variant: "fixed",
  },
  render: ({ variant }) => {
    return <Navbar variant={variant} />;
  },
};
