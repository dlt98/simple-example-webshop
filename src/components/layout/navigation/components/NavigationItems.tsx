import Sidebar from "../../../shared/sidebar/Sidebar";
import { NAVIGATION_ITEMS } from "../constants";
import SingleNavigationItem from "./SingleNavigationItem";
import burgerMenuIcon from "../../../../assets/icons/png/burger-menu-icon.png";
import { ESidebarPosition } from "../../../shared/sidebar";

const NavigationItems = () => {
  const navigationItems = (
    <ul className="flex flex-col justify-center gap-3 md:flex-row md:gap-4">
      {NAVIGATION_ITEMS.map((item) => (
        <SingleNavigationItem {...item} />
      ))}
    </ul>
  );

  return (
    <nav className="flex w-full items-center">
      <div className="w-full max-md:hidden">{navigationItems}</div>

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
      >
        {navigationItems}
      </Sidebar>
    </nav>
  );
};

export default NavigationItems;
