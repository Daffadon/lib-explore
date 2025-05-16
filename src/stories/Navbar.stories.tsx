import type { ComponentProps } from "react";
import Navbar from "../components/appbar/navbar/Navbar";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, screen, userEvent, within } from "@storybook/test";

type StoryProps = ComponentProps<typeof Navbar>;

const meta: Meta<StoryProps> = {
  title: "Template/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    sideBarPosition: {
      options: ["top", "right"],
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
    variant: "primary",
    sideBarPosition: "right",
  },

  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  render: ({ ...args }) => {
    return <Navbar {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const linkStorage = [
      "/profile",
      "/partnership",
      "/article",
      "/contact",
      "/login",
    ];
    const logoLink = canvas.getAllByRole("link");
    expect(logoLink[0]).toHaveAttribute("href", "/");
    const links = canvas
      .getAllByRole("link")
      .filter((link) => !link.className.includes("navbar__logo-container"));
    links.forEach((link) => {
      expect(linkStorage).toContain(link.getAttribute("href"));
    });
  },
};

export const MobileNavbar: Story = {
  args: {
    variant: "primary",
    sideBarPosition: "right",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
  render: ({ ...args }) => {
    return <Navbar {...args} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const linkStorage = [
      "/profile",
      "/partnership",
      "/article",
      "/contact",
      "/login",
    ];
    const logoLink = canvas.getAllByRole("link");
    expect(logoLink[0]).toHaveAttribute("href", "/");
    const barsButton = canvas.getByTestId("navbar-bars-icon");
    expect(barsButton).toBeInTheDocument();
    await userEvent.click(barsButton);

    const links = canvas
      .getAllByRole("link")
      .filter((link) => !link.className.includes("navbar__logo-container"));
    links.forEach((link) => {
      expect(linkStorage).toContain(link.getAttribute("href"));
    });

    const blackLayer = screen.getByTestId("black-layer");
    expect(blackLayer).toBeInTheDocument();
    await userEvent.click(blackLayer);

    await userEvent.click(barsButton);
    const closeButton = canvas.getByTestId("navbar-bars-icon");
    expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);
  },
};
