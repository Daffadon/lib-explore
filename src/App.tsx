import { useForm, type SubmitHandler } from "react-hook-form";
import {
  loginSchema,
  type LoginValidation,
} from "./page/login/types/login-types";
import { zodResolver } from "@hookform/resolvers/zod";
import FormCustom from "./components/form/FormCustom";
import Input from "./components/input/Input";
import { Button } from "./components/button/default/Button";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValidation>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submitHandler: SubmitHandler<LoginValidation> = async (
    formData: LoginValidation
  ) => {
    console.log(formData);
  };
  return (
    <FormCustom<LoginValidation>
      handleSubmit={handleSubmit}
      onSubmit={submitHandler}
      orientation={"vertical"}
      formTitle={"login"}
      titlePosition={"center"}
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
      <div>
        <Button variant={"primary"} size={"md"} type={"submit"}>
          Login
        </Button>
      </div>
    </FormCustom>
  );
}

export default App;
