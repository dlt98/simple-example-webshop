import { ButtonHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import { BUTTON_VARIANT, BUTTON_VARIANT_CLASSNAME } from "./button.styles";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: BUTTON_VARIANT;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  iconClassName?: string;
}

const Button = ({
  children,
  variant = BUTTON_VARIANT.PRIMARY,
  disabled,
  isLoading,
  className,
  ...rest
}: IProps) => {
  return (
    <button
      className={twMerge(
        "flexCenter label-small transitionColor whitespace-nowrap font-bold outline-none focus:outline-none disabled:pointer-events-none disabled:cursor-none disabled:transition-none",
        BUTTON_VARIANT_CLASSNAME[variant],
        className
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
