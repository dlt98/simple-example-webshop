import Sidebar from "../../shared/sidebar/Sidebar";
import { useCart } from "../../../hooks";
import { SingleCartItem } from "./components/SingleCartItem";
import CartButton from "./components/CartButton";

const CartSidebar = () => {
  const { cart, cartTotal, upsertCartMutation } = useCart();

  return (
    <Sidebar
      title="Shopping cart"
      triggerButton={<CartButton cartProducts={cart.products} />}
      className="bg-white"
      canvasClassName="mt-5"
    >
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-lg font-bold">${cartTotal}</h3>
        {cart.products?.map((singleProduct) => (
          <SingleCartItem
            {...singleProduct}
            onQuantityChange={upsertCartMutation.mutateAsync}
          />
        ))}
      </div>
    </Sidebar>
  );
};

export default CartSidebar;
