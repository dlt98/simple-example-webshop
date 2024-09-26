import CartSidebar from "../cartSidebar/CartSidebar";
import { Logo } from "../Logo";
import NavigationItems from "./components/NavigationItems";

export default function Navigation() {
  return (
    <header className="flex flex-wrap items-center justify-between bg-black p-4">
      <Logo />
      <NavigationItems />
      <CartSidebar />
    </header>
  );
}
