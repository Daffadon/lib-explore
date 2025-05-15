import type { ComponentProps } from "react";
import Input from "../components/input/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

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
};
