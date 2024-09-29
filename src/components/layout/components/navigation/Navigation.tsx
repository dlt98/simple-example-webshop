import { CartSidebar } from "../cartSidebar";
import { Logo } from "../Logo";
import { NavigationItems } from "./components";

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-black p-4">
      <Logo />
      <NavigationItems />
      <CartSidebar />
    </header>
  );
};
