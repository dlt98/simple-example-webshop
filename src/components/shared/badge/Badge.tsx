import { twMerge } from "tailwind-merge";

import { EBadgeVariant, badgeStyles } from "./constants";

interface IProps {
  text?: string;
  children?: React.ReactNode;
  variant?: EBadgeVariant;
  className?: string;
}

const Badge = ({
  text,
  variant = EBadgeVariant.clear,
  children,
  className,
}: IProps) => {
  return (
    <div
      className={twMerge(
        "transition-all flexCenter rounded-full gap-1.5 px-1.5 py-[1px] disabled:bg-neutral900 disabled:text-neutral800",
        badgeStyles[variant],
        className
      )}
    >
      {text || children}
    </div>
  );
};
export default Badge;
