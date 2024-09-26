import { ReactNode, useState } from "react";
import { Button, BUTTON_VARIANT } from "../../core";
import { SidebarCanvas } from "./components/SidebarCanvas";
import { BackdropBlur } from "./components/BackdropBlur";
import { SidebarCanvasHeader } from "./components/SidebarCanvasHeader";

interface IProps {
  title: string;
  children: ReactNode;
  triggerButton: ReactNode;
  canvasClassName?: string;
}

const Sidebar = ({
  title,
  children,
  triggerButton,
  canvasClassName,
}: IProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <BackdropBlur open={isSidebarOpen} onClick={() => setIsSidebarOpen(false)}>
      <Button
        variant={BUTTON_VARIANT.ICON}
        className="order-2 md:order-3"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar button"
      >
        {triggerButton}
      </Button>
      <SidebarCanvas
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        childrenClassName={canvasClassName}
      >
        <SidebarCanvasHeader title={title} />
        {children}
      </SidebarCanvas>
    </BackdropBlur>
  );
};

export default Sidebar;
