import type { ComponentProps } from "react";
import { Button } from "../../components/button/default/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  title: "Atom/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
      description:
        "Defines the visual style of the button. Options are 'primary' and 'secondary'.",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
      description:
        "Specifies the size of the button. Options are 'sm', 'md', and 'lg'.",
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Button",
    variant: "primary",
    size: "md",
    type: "button",
  },
  argTypes: {
    variant: {
      options: ["primary"],
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    layout: "centered", // This story only
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Button")).toBeInTheDocument();
    const button = canvas.getByRole("button");
    await expect(button).toHaveStyle({ backgroundColor: "rgb(0, 122, 204)" });
    await expect(button).toHaveStyle({ color: "rgb(255, 255, 255)" });
    await userEvent.click(button);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};

export const Secondary: Story = {
  args: {
    buttonText: "Button",
    variant: "secondary",
    size: "md",
    type: "button",
  },

  argTypes: {
    variant: {
      options: ["secondary"],
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Button")).toBeInTheDocument();
    const secondaryButton = canvas.getByRole("button");
    await expect(secondaryButton).toHaveStyle({ color: "rgb(0, 64, 128)" });
    await expect(secondaryButton).toHaveStyle({
      backgroundColor: "rgb(255, 255, 255)",
    });
    await userEvent.click(secondaryButton);
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};


