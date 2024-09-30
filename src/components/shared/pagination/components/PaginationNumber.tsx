import { Button, BUTTON_VARIANT } from "@/components/core";
import { twMerge } from "tailwind-merge";

interface IProps {
  isCurrentPage: boolean;
  onClick: () => void;
  number: number;
}

export const PaginationNumber = ({
  onClick,
  isCurrentPage,
  number,
}: IProps) => {
  return (
    <Button
      variant={BUTTON_VARIANT.ICON}
      onClick={onClick}
      className={twMerge(
        "rounded-md px-3 py-2 text-sm font-medium",
        isCurrentPage
          ? "bg-blue-500 text-white"
          : "bg-white text-gray-700 hover:bg-gray-50",
      )}
      aria-current={isCurrentPage ? "page" : undefined}
    >
      {number}
    </Button>
  );
};
