import Sidebar from "../../shared/sidebar/Sidebar";
import shoppingCartIcon from "../../../assets/icons/shopping_cart.svg";
import { useCart } from "../../../hooks";
import { SingleCartItem } from "./components/SingleCartItem";
import { useEffect } from "react";

const CartSidebar = () => {
  const { cart, clearCart, refetch } = useCart();

  console.log("cart IN SIDEBAR", cart.products);

  console.log("-----");

  useEffect(() => {
    console.log("DATA HAS BEEN CHANGED");
    console.log("cart", cart);
  }, [cart]);

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
      <button onClick={clearCart}>REMOVE CART STUFF</button>
      <button onClick={() => refetch()}>REFETCH</button>
      {cart.products.map((singleProduct) => {
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
