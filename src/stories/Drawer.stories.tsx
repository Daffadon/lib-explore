import type { ComponentProps } from "react";
import Drawer from "../components/drawer/Drawer";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button/default/Button";
import "../components/appbar/sidebar/sidebar.scss";
import { expect, fn, userEvent, within } from "@storybook/test";
type StoryProps = ComponentProps<typeof Drawer>;

const meta: Meta<StoryProps> = {
  title: "Organism/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    position: {
      options: ["top", "right"],
      control: {
        type: "select",
      },
    },
    isOpenSideBar: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultDrawer: Story = {
  args: {
    position: "right",
    variant: "primary",
    isOpenSideBar: true,
  },
  render: (args) => {
    return (
      <Drawer {...args}>
        <div className="sidebar__container">
          <a
            href="/profile"
            className={`sidebar__item sidebar__item--${args.variant} `}
          >
            Profile
          </a>
          <a
            href="/partnership"
            className={`sidebar__item sidebar__item--${args.variant}`}
          >
            Partnership
          </a>
          <a
            href="/article"
            className={`sidebar__item sidebar__item--${args.variant}`}
          >
            Article
          </a>
          <a
            href="/contact"
            className={`sidebar__item sidebar__item--${args.variant}`}
          >
            Contact
          </a>
          <Button
            onClick={args.onClick}
            variant={args.variant}
            size={"md"}
            type={"submit"}
          >
            Login
          </Button>
        </div>
      </Drawer>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Profile")).toBeInTheDocument();
    await expect(canvas.getByText("Partnership")).toBeInTheDocument();
    await expect(canvas.getByText("Article")).toBeInTheDocument();
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
    const closeIcon = canvas.getByTestId("close-container__icon");
    await expect(closeIcon).toBeInTheDocument();
    await userEvent.click(closeIcon);
    await expect(args.onClick).toHaveBeenCalled();

    const loginButton = canvas.getByRole("button", { name: /login/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

export const TopDrawer: Story = {
  args: {
    position: "top",
    variant: "primary",
    isOpenSideBar: true,
  },
  render: (args) => {
    return (
      <Drawer {...args}>
        <div className="sidebar__container">
          <a
            href="/profile"
            className={`sidebar__item sidebar__item--${args.variant} `}
          >
            Profile
          </a>
          <a
            href="/partnership"
            className={`sidebar__item sidebar__item--${args.variant}`}
          >
            Partnership
          </a>
          <a
            href="/article"
            className={`sidebar__item sidebar__item--${args.variant}`}
          >
            Article
          </a>
          <a
            href="/contact"
            className={`sidebar__item sidebar__item--${args.variant}`}
          >
            Contact
          </a>
          <Button
            onClick={args.onClick}
            variant={args.variant}
            size={"md"}
            type={"submit"}
          >
            Login
          </Button>
        </div>
      </Drawer>
    );
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Profile")).toBeInTheDocument();
    await expect(canvas.getByText("Partnership")).toBeInTheDocument();
    await expect(canvas.getByText("Article")).toBeInTheDocument();
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
    const closeIcon = canvas.getByTestId("close-container__icon");
    await expect(closeIcon).toBeInTheDocument();
    await userEvent.click(closeIcon);
    await expect(args.onClick).toHaveBeenCalled();

    const loginButton = canvas.getByRole("button", { name: /login/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};
