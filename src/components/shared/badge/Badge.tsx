import { twMerge } from "tailwind-merge";

import { EBadgeVariant, badgeStyles } from "./constants";

interface IProps {
  text?: string;
  children?: React.ReactNode;
  variant?: EBadgeVariant;
  className?: string;
}

export const Badge = ({
  text,
  variant = EBadgeVariant.clear,
  children,
  className,
}: IProps) => {
  return (
    <div
      className={twMerge(
        "flexCenter disabled:bg-neutral900 disabled:text-neutral800 gap-1.5 rounded-full px-1.5 py-[1px] transition-all",
        badgeStyles[variant],
        className,
      )}
    >
      {text || children}
    </div>
  );
};
