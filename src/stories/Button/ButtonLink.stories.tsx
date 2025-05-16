import type { ComponentProps } from "react";
import ButtonLink from "../../components/button/button-link/ButtonLink";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

type StoryProps = ComponentProps<typeof ButtonLink> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  title: "Atom/Button",
  component: ButtonLink,
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
  },
};

export default meta;

type Story = StoryObj<StoryProps>;
export const DefaultButtonLink: Story = {
  args: {
    buttonText: "Button",
    variant: "primary",
    size: "md",
    linkTo: "/",
  },

  parameters: {
    layout: "centered",
  },
  render: ({ buttonText, ...args }) => {
    return <ButtonLink {...args}>{buttonText}</ButtonLink>;
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Button")).toBeInTheDocument();
    const button = canvas.getByRole("button");
    await expect(button).toHaveStyle({ backgroundColor: "rgb(0, 122, 204)" });
    await expect(button).toHaveStyle({ color: "rgb(255, 255, 255)" });

    
    const link = canvas.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveAttribute("target", "_self");
  },
};
