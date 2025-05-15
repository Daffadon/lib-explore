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
  variant = "primary",
  size = "md",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`button button-variant__${variant} button-size__${size}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
