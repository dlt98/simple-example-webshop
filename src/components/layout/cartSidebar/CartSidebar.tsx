import Sidebar from "../../shared/sidebar/Sidebar";
import { useCart } from "../../../hooks";
import { SingleCartItem } from "./components/SingleCartItem";
import CartButton from "./components/CartButton";

const CartSidebar = () => {
  const { cart, upsertCartMutation } = useCart();

  return (
    <Sidebar
      title="Shopping cart"
      triggerButton={<CartButton cartProducts={cart.products} />}
      canvasClassName="space-y-3"
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
