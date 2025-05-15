import "./form-style.scss";
import { Children, type ReactElement } from "react";
import type {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
interface IFormCustom<T extends FieldValues> {
  children: ReactElement[];
  onSubmit: SubmitHandler<T>;
  handleSubmit: UseFormHandleSubmit<T>;
  orientation: "horizontal" | "vertical";
  formTitle: string;
  titlePosition: "left" | "center" | "right";
}
const FormCustom = <T extends FieldValues>({
  children,
  onSubmit,
  handleSubmit,
  orientation,
  formTitle,
  titlePosition,
}: IFormCustom<T>) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
      className={`form`}
    >
      <p className={`form__title form__title--${titlePosition}`}>{formTitle}</p>
      <div className={`form__input--${orientation}`}>
        {Children.map(children, (child) => {
          return child;
        })}
      </div>
    </form>
  );
};

export default FormCustom;
