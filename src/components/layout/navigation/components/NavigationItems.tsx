import { NAVIGATION_ITEMS } from "../constants";
import SingleNavigationItem from "./SingleNavigationItem";

const NavigationItems = () => {
  return (
    <nav className="order-3 w-full mt-4 md:order-2 md:mt-0 md:w-auto">
      <ul className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        {NAVIGATION_ITEMS.map((item) => (
          <SingleNavigationItem {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationItems;
