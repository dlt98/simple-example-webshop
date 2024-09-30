import { Button, BUTTON_VARIANT } from "@/components/core";
import { Divider, Sidebar } from "@/components/shared";
import { useCart } from "@/hooks";
import { CartButton, SingleCartItem } from "./components";

export const CartSidebar = () => {
  const { cart, cartTotal, upsertCartMutation } = useCart();

  const isCartEmpty = !cart.products.length;

  return (
    <Sidebar
      title="Shopping cart"
      triggerButton={<CartButton cartProducts={cart.products} />}
      className="bg-white"
      canvasClassName="mt-5"
    >
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-lg font-bold">
          {isCartEmpty ? "Add items to cart" : `$ ${cartTotal}`}
        </h3>
        {!isCartEmpty && (
          <>
            <Button variant={BUTTON_VARIANT.CTA}>Checkout</Button>
            <Divider />
            {cart.products?.map((singleProduct) => (
              <SingleCartItem
                {...singleProduct}
                onQuantityChange={upsertCartMutation.mutateAsync}
                key={singleProduct.id}
              />
            ))}
          </>
        )}
      </div>
    </Sidebar>
  );
};
