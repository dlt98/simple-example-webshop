import { Button, BUTTON_VARIANT } from "@/components/core";
import { twMerge } from "tailwind-merge";

interface IProps {
  onClick: () => void;
  isDisabled: boolean;
  text: string;
}

export const PaginationNavigation = ({ isDisabled, onClick, text }: IProps) => {
  return (
    <Button
      variant={BUTTON_VARIANT.ICON}
      onClick={onClick}
      disabled={isDisabled}
      className={twMerge(
        "rounded-md px-3 py-2 text-sm font-medium",
        isDisabled
          ? "cursor-not-allowed bg-gray-100 text-gray-400"
          : "bg-white text-gray-700 hover:bg-gray-50",
      )}
      aria-label={`${text} page`}
    >
      {text}
    </Button>
  );
};
