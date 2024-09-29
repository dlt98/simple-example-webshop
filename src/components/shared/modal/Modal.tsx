import { twMerge } from "tailwind-merge";
import { ModalHeader } from "./components";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  maxWidth?: string;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  overlayColor?: string;
  modalBgColor?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  closeButtonClassName?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  maxWidth = "max-w-2xl",
  closeOnOverlayClick = true,
  showCloseButton = true,
  overlayColor = "bg-black bg-opacity-50",
  modalBgColor = "bg-white",
  titleClassName,
  bodyClassName,
  footerClassName,
  closeButtonClassName,
}: ModalProps) => {
  return (
    <div
      className={twMerge(
        "flexCenter fixed inset-0 z-50 transition-all duration-300 ease-in-out",
        overlayColor,
        isOpen ? "z-50 opacity-100" : "pointer-events-none opacity-0",
      )}
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className={twMerge(
          "w-full rounded-lg shadow-xl transition-all duration-300 ease-in-out",
          maxWidth,
          modalBgColor,
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader
          title={title}
          onClose={onClose}
          closeButtonClassName={closeButtonClassName}
          showCloseButton={showCloseButton}
          titleClassName={titleClassName}
        />
        <div
          className={twMerge(
            "max-h-[90dvh] overflow-auto px-6 py-4",
            bodyClassName,
          )}
        >
          {children}
        </div>
        {footer && (
          <div className={twMerge("border-t px-6 py-4", footerClassName)}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
