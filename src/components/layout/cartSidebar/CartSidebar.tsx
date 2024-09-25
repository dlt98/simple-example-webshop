import Sidebar from "../../shared/sidebar/Sidebar";
import shoppingCartIcon from "../../../assets/icons/shopping_cart.svg";
import { useCart } from "../../../hooks";
import { SingleCartItem } from "./components/SingleCartItem";

const CartSidebar = () => {
  const { cart } = useCart();

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
      {cart.products?.map((singleProduct) => {
        return (
          <SingleCartItem
            {...singleProduct}
            onQuantityChange={() => console.log("Check")}
          />
        );
      })}
    </Sidebar>
  );
};

export default CartSidebar;
