import { useCart } from "../../../hooks";
import { Button } from "../../core";

interface IProps {
  productId: number;
}
const AddToCartButton = ({ productId }: IProps) => {
  const { upsertCart } = useCart();

  const onClickHandler = async () => {
    console.log("upsertCart", upsertCart);
    await upsertCart.mutateAsync(productId);
  };

  return <Button onClick={onClickHandler}>Add to cart</Button>;
};

export default AddToCartButton;
