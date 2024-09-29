import { Button, BUTTON_VARIANT } from "@/components/core";
import { twMerge } from "tailwind-merge";

interface IProps {
  position: "left" | "right";
  onClick: () => void;
  className?: string;
}

export const ChevronButton = ({ onClick, position, className }: IProps) => {
  return (
    <Button
      variant={BUTTON_VARIANT.ICON}
      onClick={onClick}
      className={twMerge("size-8", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={position === "left" ? "" : "rotate-180"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </Button>
  );
};
