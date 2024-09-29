import { Button, BUTTON_VARIANT } from "@/components/core";
import { twMerge } from "tailwind-merge";
import closeIcon from "@/assets/icons/png/close-icon.png";
import { ReactNode } from "react";

interface IProps {
  title?: ReactNode;
  titleClassName?: string;
  showCloseButton?: boolean;
  closeButtonClassName?: string;
  onClose: () => void;
}

export const ModalHeader = ({
  onClose,
  closeButtonClassName,
  showCloseButton,
  title,
  titleClassName,
}: IProps) => {
  return (
    <>
      {title && (
        <div className={twMerge("border-b px-6 py-4", titleClassName)}>
          {title}
        </div>
      )}
      {showCloseButton && (
        <Button
          variant={BUTTON_VARIANT.ICON}
          className={twMerge(
            "absolute right-4 top-4 size-5 text-gray-500",
            closeButtonClassName,
          )}
          onClick={onClose}
        >
          <img src={closeIcon} alt="Modal close button" />
        </Button>
      )}
    </>
  );
};
