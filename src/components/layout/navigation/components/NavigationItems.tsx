import { NAVIGATION_ITEMS } from "../constants";
import SingleNavigationItem from "./SingleNavigationItem";

const NavigationItems = () => {
  return (
    <nav className="order-3 mt-4 w-full md:order-2 md:mt-0 md:w-auto">
      <ul className="flex flex-col gap-3 md:flex-row md:gap-4">
        {NAVIGATION_ITEMS.map((item) => (
          <SingleNavigationItem {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationItems;
