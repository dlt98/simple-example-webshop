import Sidebar from "../../../shared/sidebar/Sidebar";
import burgerMenuIcon from "../../.././../assets/icons/png/burger-menu-icon.png";
import { ESidebarPosition } from "../../../shared/sidebar";
import { ReactNode } from "react";
import { useMobileCheck } from "../../../../hooks";

interface IProps {
  menuItems: ReactNode;
}

export const MobileMenuSidebar = ({ menuItems }: IProps) => {
  const isMobile = useMobileCheck();

  return (
    <Sidebar
      title="Menu"
      triggerButton={
        <img
          src={burgerMenuIcon}
          alt="mobile menu icon"
          className="size-8 text-orange-400"
        />
      }
      className="bg-white md:hidden"
      triggerButtonClassName="md:hidden w-max"
      canvasClassName="mt-4"
      position={ESidebarPosition.LEFT}
      shouldClose={!isMobile}
    >
      {menuItems}
    </Sidebar>
  );
};
