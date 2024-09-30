import { CartSidebar } from "../cartSidebar";
import { Logo } from "../Logo";
import { UserAuthButton } from "../userActions";
import { NavigationItems } from "./components";

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-black p-4">
      <Logo />
      <NavigationItems />
      <div className="flex gap-3">
        <UserAuthButton />
        <CartSidebar />
      </div>
    </header>
  );
};
