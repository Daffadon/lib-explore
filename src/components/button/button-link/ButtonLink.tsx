import { type PropsWithChildren } from "react";
import { Button } from "../default/Button";

type ButtonLinkProps = PropsWithChildren<{
  variant: "primary" | "secondary";
  linkTo: string;
  size: "sm" | "md" | "lg";
}>;
const ButtonLink = ({ variant, linkTo, children }: ButtonLinkProps) => {
  return (
    <a href={linkTo} target="_self">
      <Button variant={variant} size={"md"} type={"button"}>
        {children}
      </Button>
    </a>
  );
};

export default ButtonLink;
