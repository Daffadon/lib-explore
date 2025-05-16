import type { ComponentProps } from "react";
import FormCustom from "../components/form/FormCustom";
import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../components/input/Input";
import { Button } from "../components/button/default/Button";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import {
  loginSchema,
  type LoginValidation,
} from "../page/login/types/login-types";
import { zodResolver } from "@hookform/resolvers/zod";

type StoryProps = ComponentProps<typeof FormCustom>;
// type FormData = {
//   email: string;
//   password: string;
// };

const meta: Meta<StoryProps> = {
  title: "Organism/Form",
  component: FormCustom,
  decorators: [
    (Story) => (
      <FormProvider {...useForm()}>
        <Story />
      </FormProvider>
    ),
  ],
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
    onSubmit: fn(),
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
    docs: {
      source: {
        type: "code",
      },
    },
    layout: "centered",
    controls: {
      exclude: ["children", "onSubmit", "handleSubmit"],
    },
  },
  render: ({ orientation, titlePosition, formTitle, onSubmit }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginValidation>({
      resolver: zodResolver(loginSchema),
    });

    return (
      <FormCustom<LoginValidation>
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        orientation={orientation}
        formTitle={formTitle}
        titlePosition={titlePosition}
      >
        <Input<LoginValidation>
          size={"lg"}
          type={"text"}
          placeHolder={"Your Email"}
          required={false}
          registerTitle={"email"}
          register={register}
          errors={errors}
          label="Email"
          labelPosition="top"
        />
        <Input<LoginValidation>
          size={"lg"}
          type={"password"}
          placeHolder={"Your Password"}
          required={false}
          registerTitle={"password"}
          register={register}
          errors={errors}
          label="Password"
          labelPosition="top"
        />
        <Button variant={"primary"} size={"md"} type={"submit"}>
          Login
        </Button>
      </FormCustom>
    );
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    // Test Form Title
    const loginTexts = await canvas.findAllByText("Login");
    await expect(loginTexts[0]).toBeInTheDocument();

    // Label Test
    const emailLabel = await canvas.findByText("Email");
    const passwordLabel = await canvas.findByText("Password");
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    // click without input
    const button = await canvas.findByTestId("button-test");
    await userEvent.click(button);
    expect(
      await canvas.findByText("Invalid email address")
    ).toBeInTheDocument();
    expect(await canvas.findByText("Password is required")).toBeInTheDocument();

    // email and password input should be in document
    const emailInput = await canvas.findByLabelText("Email");
    const passwordInput = await canvas.findByLabelText("Password");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // test email input has text type and password input has passwordtype
    expect(emailInput).toHaveAttribute("type", "text");
    expect(passwordInput).toHaveAttribute("type", "password");

    // test email input is wrong
    await userEvent.type(emailInput, "testEmail");
    await userEvent.type(passwordInput, "asdasd");
    await userEvent.click(button);
    expect(
      await canvas.findByText("Invalid email address")
    ).toBeInTheDocument();

    // test email input is right

    await userEvent.type(emailInput, "test@email.com");
    await userEvent.type(passwordInput, "asdasd");
    await userEvent.click(button);
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
    expect(args.onSubmit).toHaveBeenCalledTimes(1);
  },
};
