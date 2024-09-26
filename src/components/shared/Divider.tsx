import { twMerge } from "tailwind-merge";

interface IProps {
  className?: string;
}

export const Divider = ({ className }: IProps) => {
  return <div className={twMerge("h-px w-full bg-slate-300", className)} />;
};
