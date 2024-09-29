import { useCart } from "@/hooks";
import { Button, BUTTON_VARIANT } from "@/components/core";
import ShoppingCartIcon from "@/assets/icons/shopping_cart.svg";

interface IProps {
  productId: number;
}
export const AddToCartButton = ({ productId }: IProps) => {
  const { upsertCartMutation } = useCart();

  const onClickHandler = async () => {
    await upsertCartMutation.mutateAsync({ productId });
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
    >
      Add to cart
    </Button>
  );
};
