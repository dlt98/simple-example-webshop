import { useCart } from "@/hooks";
import { Button, BUTTON_VARIANT } from "@/components/core";
import ShoppingCartIcon from "@/assets/icons/shopping_cart.svg";

interface IProps {
  productId: number;
}
export const AddToCartButton = ({ productId }: IProps) => {
  const {
    upsertCartMutation: { mutateAsync },
    cart,
  } = useCart();

  const onClickHandler = async () => {
    const cartItem = cart.products.find((product) => product.id === productId);

    const currentAmount = cartItem?.amount;
    await mutateAsync({
      productId,
      amount: currentAmount ? currentAmount + 1 : currentAmount,
    });
  };

  return (
    <Button
      onClick={onClickHandler}
      variant={BUTTON_VARIANT.PRIMARY}
      leftIcon={
        <img
          src={ShoppingCartIcon}
          alt="shopping cart icon"
          className="mr-2 size-5"
        />
      }
      test-data="add-to-cart-button"
    >
      Add to cart
    </Button>
  );
};
