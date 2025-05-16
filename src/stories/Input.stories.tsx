import type { ComponentProps } from "react";
import Input from "../components/input/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { expect, userEvent, within } from "@storybook/test";

type StoryProps = ComponentProps<typeof Input>;

type FormData = {
  words: string;
};

const meta: Meta<StoryProps> = {
  title: "Atom/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
      description:
        "Specifies the size of the input. Options are 'sm', 'md', and 'lg'.",
    },
    type: {
      options: [
        "email",
        "text",
        "password",
        "number",
        "date",
        "color",
        "image",
      ],
      control: {
        type: "select",
      },
    },
    required: {
      control: {
        type: "boolean",
      },
    },
    labelPosition: {
      options: ["left", "top", "right"],
      control: {
        type: "radio",
      },
    },
  },
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["registerTitle", "register", "errors"],
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultInput: Story = {
  args: {
    size: "md",
    type: "text",
    placeHolder: "input",
    required: false,
  },
  parameters: {
    controls: {
      exclude: [
        "label",
        "labelPosition",
        "registerTitle",
        "register",
        "errors",
      ],
    },
  },

  render: ({ ...args }) => {
    const {
      register,
      formState: { errors },
    } = useForm<FormData>();
    return (
      <Input<FormData>
        {...args}
        register={register}
        registerTitle="words"
        errors={errors}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/input/i);
    await userEvent.type(input, "Hello World");
    await expect(input).toHaveValue("Hello World");
    await expect(input).toHaveAttribute("type", "text");
  },
};

export const WithLabel: Story = {
  args: {
    size: "md",
    type: "text",
    placeHolder: "input",
    required: false,
    label: "Input Label",
    labelPosition: "left",
  },
  render: ({ ...args }) => {
    const {
      register,
      formState: { errors },
    } = useForm<FormData>();
    return (
      <Input<FormData>
        {...args}
        register={register}
        registerTitle="words"
        errors={errors}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Input Label")).toBeDefined();
    const input = canvas.getByPlaceholderText(/input/i);
    await userEvent.type(input, "Hello World");
    await expect(input).toHaveValue("Hello World");
    await expect(input).toHaveAttribute("type", "text");
  },
};

export const RadioInput: Story = {
  args: {
    size: "md",
    type: "radio",
    placeHolder: "input",
    required: false,
    label: "Input Label",
    labelPosition: "right",
  },
  argTypes: {
    type: {
      options: ["radio", "checkbox"],
      control: {
        type: "select",
      },
    },
  },
  render: ({ ...args }) => {
    const {
      register,
      formState: { errors },
    } = useForm<FormData>();
    return (
      <Input<FormData>
        {...args}
        register={register}
        registerTitle="words"
        errors={errors}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Input Label")).toBeDefined();
    const input = canvas.getByPlaceholderText(/input/i);
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute("type", "radio");
    await expect((input as HTMLInputElement).checked).toBe(false);
    await userEvent.click(input);
    await expect((input as HTMLInputElement).checked).toBe(true);
  },
};

export const CheckboxInput: Story = {
  args: {
    size: "md",
    type: "checkbox",
    placeHolder: "input",
    required: false,
    label: "Input Label",
    labelPosition: "right",
  },
  argTypes: {
    type: {
      options: ["checkbox"],
      control: {
        type: "select",
      },
    },
  },
  render: ({ ...args }) => {
    const {
      register,
      formState: { errors },
    } = useForm<FormData>();
    return (
      <Input<FormData>
        {...args}
        register={register}
        registerTitle="words"
        errors={errors}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Input Label")).toBeDefined();
    const input = canvas.getByPlaceholderText(/input/i);
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute("type", "checkbox");
    await expect((input as HTMLInputElement).checked).toBe(false);
    await userEvent.click(input);
    await expect((input as HTMLInputElement).checked).toBe(true);
  },
};

export const RequiredNoLabel: Story = {
  args: {
    size: "md",
    type: "text",
    placeHolder: "input",
    required: true,
  },
  render: ({ ...args }) => {
    const {
      register,
      formState: { errors },
    } = useForm<FormData>();
    return (
      <Input<FormData>
        {...args}
        register={register}
        registerTitle="words"
        errors={errors}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const requiredMark = canvas.getByText("*");
    await expect(requiredMark).toBeInTheDocument();
  },
};
