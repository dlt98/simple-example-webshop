import CartSidebar from "../cartSidebar/CartSidebar";
import NavigationItems from "./components/NavigationItems";

export default function Navigation() {
  return (
    <header className="flex flex-wrap items-center justify-between bg-slate-600 p-4">
      <div className="text-2xl font-bold">Logo</div>
      <NavigationItems />
      <CartSidebar />
    </header>
  );
}
