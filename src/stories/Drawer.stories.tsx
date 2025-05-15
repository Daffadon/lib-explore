import type { ComponentProps } from "react";
import Drawer from "../components/drawer/Drawer";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/button/Button";
import "../components/appbar/sidebar/sidebar.scss";
import { fn } from "@storybook/test";
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
};
