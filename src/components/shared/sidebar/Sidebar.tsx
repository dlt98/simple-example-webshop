import { ReactNode, useState } from "react";
import { Button, BUTTON_VARIANT } from "../../core";
import { SidebarCanvas } from "./components/SidebarCanvas";
import { BackdropBlur } from "./components/BackdropBlur";
import { useBodyScroll } from "../../../hooks";

interface IProps {
  title: string;
  children: ReactNode;
  triggerButton: ReactNode;
  canvasClassName?: string;
  className?: string;
  triggerButtonClassName?: string;
}

const Sidebar = ({
  title,
  children,
  triggerButton,
  canvasClassName,
  className,
  triggerButtonClassName,
}: IProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useBodyScroll(isSidebarOpen);

  return (
    <BackdropBlur open={isSidebarOpen} onClick={() => setIsSidebarOpen(false)}>
      <Button
        variant={BUTTON_VARIANT.ICON}
        className={triggerButtonClassName}
        onClick={() => setIsSidebarOpen(true)}
        aria-label={`Open ${title} sidebar button`}
      >
        {triggerButton}
      </Button>
      <SidebarCanvas
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        childrenClassName={canvasClassName}
        className={className}
        title={title}
      >
        {children}
      </SidebarCanvas>
    </BackdropBlur>
  );
};

export default Sidebar;
