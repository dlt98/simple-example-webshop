import { useCart } from "../../../hooks";
import { Button, BUTTON_VARIANT } from "../../core";

interface IProps {
  productId: number;
}
const AddToCartButton = ({ productId }: IProps) => {
  const { upsertCart } = useCart();

  const onClickHandler = async () => {
    console.log("upsertCart", upsertCart);
    await upsertCart.mutateAsync(productId);
  };

  return (
    <Button onClick={onClickHandler} variant={BUTTON_VARIANT.PRIMARY}>
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
