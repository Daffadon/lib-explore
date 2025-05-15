import "./input-style.scss";
import Label from "../label/Label";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  size: "sm" | "md" | "lg";
  type: React.HTMLInputTypeAttribute;
  placeHolder: string;
  required: boolean;
  label?: string;
  labelPosition?: "left" | "top" | "right";
  registerTitle: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}
const Input = <T extends FieldValues>({
  type = "text",
  size = "sm",
  placeHolder,
  required = false,
  label,
  labelPosition,
  register,
  registerTitle,
  errors,
  ...rest
}: InputProps<T>) => {
  return (
    <div
      className={`input-container${label ? "__label" : ""} ${
        label
          ? labelPosition == "top"
            ? "input-container__label__top"
            : labelPosition == "right"
            ? "input-container__label__right"
            : null
          : null
      }`}
    >
      {label ? (
        <Label
          text={label}
          required={required}
          htmlFor={registerTitle}
          size={size}
        />
      ) : (
        ""
      )}
      <div className="input">
        <input
          id={registerTitle}
          className={`input__base input__${size} ${
            type == "radio" || type == "checkbox"
              ? "input__" + type + " input__" + type + "--" + size
              : ""
          }`}
          type={type}
          placeholder={placeHolder}
          required={required}
          size={20}
          {...register(registerTitle)}
          {...rest}
        />
        {required && !label ? <span className="input__required">*</span> : null}
      </div>
      {errors[registerTitle] && (
        <p className="text-red-600">
          {errors[registerTitle]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
