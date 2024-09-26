import CartSidebar from "../cartSidebar/CartSidebar";
import NavigationItems from "./components/NavigationItems";

export default function Navigation() {
  return (
    <header className="bg-background flex flex-wrap items-center justify-between p-4">
      <div className="text-2xl font-bold">Logo</div>
      <NavigationItems />
      <CartSidebar />
    </header>
  );
}
