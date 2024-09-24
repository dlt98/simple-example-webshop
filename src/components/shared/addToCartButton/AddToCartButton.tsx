import { useCart } from "../../../hooks";
import { Button } from "../../core";

interface IProps {
  productId: number;
}
const AddToCartButton = ({ productId }: IProps) => {
  const { addToCart } = useCart();

  const onClickHandler = async () => {
    await addToCart.mutateAsync(productId);
  };

  return <Button onClick={onClickHandler}>Add to cart</Button>;
};

export default AddToCartButton;
