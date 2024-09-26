import { NAVIGATION_ITEMS } from "../constants";
import SingleNavigationItem from "./SingleNavigationItem";
import { MobileMenuSidebar } from "./MobileMenuSidebar";

const NavigationItems = () => {
  const navigationItems = (
    <ul className="flex flex-col justify-center gap-3 md:flex-row md:gap-4">
      {NAVIGATION_ITEMS.map((item) => (
        <SingleNavigationItem {...item} key={item.title} />
      ))}
    </ul>
  );

  return (
    <nav className="flex w-full items-center">
      <div className="w-full max-md:hidden">{navigationItems}</div>
      <MobileMenuSidebar menuItems={navigationItems} />
    </nav>
  );
};

export default NavigationItems;
