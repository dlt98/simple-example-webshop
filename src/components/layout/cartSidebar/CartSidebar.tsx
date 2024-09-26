import Sidebar from "../../shared/sidebar/Sidebar";
import shoppingCartIcon from "../../../assets/icons/shopping_cart.svg";
import { useCart } from "../../../hooks";
import { SingleCartItem } from "./components/SingleCartItem";

const CartSidebar = () => {
  const { cart, upsertCartMutation } = useCart();

  return (
    <Sidebar
      title="Shopping cart"
      triggerButton={
        <img
          src={shoppingCartIcon}
          alt="shopping cart icon"
          className="size-5"
        />
      }
    >
      {cart.products?.map((singleProduct) => (
        <SingleCartItem
          {...singleProduct}
          onQuantityChange={upsertCartMutation.mutateAsync}
        />
      ))}
    </Sidebar>
  );
};

export default CartSidebar;
