import type { ComponentProps } from "react";
import Label from "../components/label/Label";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

type StoryProps = ComponentProps<typeof Label>;

const meta: Meta<StoryProps> = {
  title: "Atom/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
      description:
        "Specifies the size of the Label. Options are 'sm', 'md', and 'lg'.",
    },
    required: {
      control: {
        type: "boolean",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultLabel: Story = {
  args: {
    size: "sm",
    text: "Input",
    required: true,
    htmlFor: "input",
  },
  render: ({ ...args }) => {
    return <Label {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Input")).toBeInTheDocument();
    await expect(canvas.getByText("*")).toBeInTheDocument();
    await expect(canvas.getByText("*")).toHaveStyle({
      color: "rgb(255, 0, 0)",
    });
  },
};
