import { ReactNode, useEffect, useState } from "react";
import { Button, BUTTON_VARIANT } from "../../core";
import { SidebarCanvas } from "./components/SidebarCanvas";
import { BackdropBlur } from "./components/BackdropBlur";
import { useBodyScroll } from "../../../hooks";
import { ESidebarPosition } from "./constants";

interface IProps {
  title: string;
  children: ReactNode;
  triggerButton: ReactNode;
  canvasClassName?: string;
  className?: string;
  triggerButtonClassName?: string;
  position?: ESidebarPosition;
  shouldClose?: boolean; // Used for external closing of the sidebar
}

const Sidebar = ({
  title,
  children,
  triggerButton,
  canvasClassName,
  className,
  triggerButtonClassName,
  position = ESidebarPosition.RIGHT,
  shouldClose = true,
}: IProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [shouldClose]);

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
        position={position}
      >
        {children}
      </SidebarCanvas>
    </BackdropBlur>
  );
};

export default Sidebar;
