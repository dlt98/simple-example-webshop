import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import closeIcon from "../../../../assets/icons/png/close-icon.png";
import { Button, BUTTON_VARIANT } from "../../../core";
import { SidebarCanvasHeader } from "./SidebarCanvasHeader";

interface SheetContentProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  childrenClassName?: string;
  className?: string;
  title: string;
}

export const SidebarCanvas = ({
  children,
  isOpen,
  setIsOpen,
  childrenClassName,
  className,
  title,
}: SheetContentProps) => {
  return (
    <div
      className={twMerge(
        "fixed inset-y-0 top-0 z-50 h-full w-3/4 gap-4 border-l p-6 shadow-lg transition-all duration-300 sm:max-w-sm",
        isOpen ? "right-0" : "-right-full",
        className,
      )}
    >
      <div className="flex justify-between">
        <SidebarCanvasHeader title={title} />
        <Button
          className="size-5"
          variant={BUTTON_VARIANT.ICON}
          onClick={() => setIsOpen(false)}
        >
          <img src={closeIcon} alt="sidebar close icon" />
        </Button>
      </div>

      <div className={childrenClassName}>{children}</div>
    </div>
  );
};
