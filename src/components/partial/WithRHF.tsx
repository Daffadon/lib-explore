import { action } from "@storybook/addon-actions";
import { type ReactNode, type FC, type JSX } from "react";
import { FormProvider, useForm } from "react-hook-form";

const StorybookFormProvider = ({ children }: { children: ReactNode }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export const withRHF =
  (showSubmitButton: boolean) =>
  (Story: FC): JSX.Element =>
    (
      <StorybookFormProvider>
        <Story />
        {showSubmitButton && <button type="submit">Submit</button>}
      </StorybookFormProvider>
    );
