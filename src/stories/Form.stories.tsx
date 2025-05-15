import type { ComponentProps } from "react";
import FormCustom from "../components/form/FormCustom";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import { Button } from "../components/button/Button";
import { action } from "@storybook/addon-actions";

type StoryProps = ComponentProps<typeof FormCustom>;
type FormData = {
  email: string;
  password: string;
};

const meta: Meta<StoryProps> = {
  title: "Organism/Form",
  component: FormCustom,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["vertical", "horizontal"],
      control: {
        type: "select",
      },
    },
    titlePosition: {
      options: ["left", "center", "right"],
      control: {
        type: "select",
      },
    },
    formTitle: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    onSubmit: action("form-submitted"),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultForm: Story = {
  args: {
    orientation: "vertical",
    titlePosition: "left",
    formTitle: "Login",
  },

  parameters: {
    layout: "centered",
    controls: {
      exclude: ["children", "onSubmit", "handleSubmit", ""],
    },
  },
  render: ({ orientation, titlePosition, formTitle }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();

    const onSubmit = action("form-submitted");

    return (
      <FormCustom<FormData>
        handleSubmit={handleSubmit}
        onSubmit={(data) => {
          onSubmit(data);
        }}
        orientation={orientation}
        formTitle={formTitle}
        titlePosition={titlePosition}
      >
        <Input<FormData>
          size={"lg"}
          type={"text"}
          placeHolder={"Your Email"}
          required={true}
          registerTitle={"email"}
          register={register}
          errors={errors}
          label="Email"
          labelPosition="top"
        />
        <Input<FormData>
          size={"lg"}
          type={"password"}
          placeHolder={"Your Password"}
          required={true}
          registerTitle={"password"}
          register={register}
          errors={errors}
          label="Password"
          labelPosition="top"
        />
        <div>
          <Button variant={"primary"} size={"md"} type={"submit"}>
            Login
          </Button>
        </div>
      </FormCustom>
    );
  },
};
