import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SheetProps {
  open: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const BackdropBlur = ({ open, onClick, children }: SheetProps) => {
  return (
    <>
      {children}
      <div
        className={twMerge(
          `bg-background/80 fixed inset-0 backdrop-blur-sm transition-all duration-300`,
          open ? "z-40 opacity-100" : "hidden opacity-0",
        )}
        onClick={onClick}
      />
    </>
  );
};
