import "./button-style.scss";

import type { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  onClick?: () => void;
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  type: "submit" | "reset" | "button";
}>;

export const Button = ({
  children,
  onClick,
  variant,
  size,
  type,
}: ButtonProps) => {
  return (
    <button
      data-testid="button-test"
      className={`button button-variant__${variant} button-size__${size}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
