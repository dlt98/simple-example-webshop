import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../core";

export interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
  button?: {
    buttonText: string;
    buttonLink: string;
  };
  className?: string;
  onIconClick?: () => void;
  customComponent?: ReactNode;
}

const EmptyContent = ({
  button,
  description,
  icon,
  title,
  className,
  onIconClick,
  customComponent,
}: IProps) => {
  return (
    <div
      className={twMerge(
        "flexCenter min-h-80 flex-col gap-6 rounded border border-neutral-600 bg-neutral-300",
        className,
      )}
    >
      <button
        type="button"
        onClick={onIconClick}
        className={twMerge(
          "size-20 rounded border border-neutral-700 bg-neutral-400",
          onIconClick ? "cursor-pointer" : "cursor-default",
        )}
      >
        {icon && icon}
      </button>
      <div className="space-y-1 text-center">
        {title && <h5 className="font-large">{title}</h5>}
        <p className="font-medium">{description}</p>
      </div>
      {!!button && (
        <a href={button.buttonLink}>
          <Button>{button.buttonText}</Button>
        </a>
      )}
      {!!customComponent && customComponent}
    </div>
  );
};

export default EmptyContent;
