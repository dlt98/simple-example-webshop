import AddToCartButton from "../shared/addToCartButton/AddToCartButton";
import {
  ProductCardDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./components";

interface IProps {
  id: number;
  title: string;
  image: string;
  price: number;
  discountPercentage: number;
  description: string;
  onClick: () => void;
}
// Design inspired by
// https://cdn.dribbble.com/users/114038/screenshots/3674970/product_card_design_2x.png

const ProductCard = ({
  id,
  description,
  image,
  onClick,
  price,
  title,
  discountPercentage,
}: IProps) => {
  return (
    <article className="relative z-0 flex flex-col items-center gap-4 pt-0 transition-all border shadow-lg roundedBrTl border-neutral700 hover:border-neutral300 p-7">
      <button className="w-full h-max" onClick={onClick}>
        <ProductImage imageUrl={image} />
        <ProductTitle title={title} />
      </button>
      <ProductCardDescription description={description} />
      <ProductPrice price={price} discountPercentage={discountPercentage} />
      <AddToCartButton productId={id} />
    </article>
  );
};

export default ProductCard;
