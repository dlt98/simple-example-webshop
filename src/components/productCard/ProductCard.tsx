import { AddToCartButton } from "@/components/shared";
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

export const ProductCard = ({
  id,
  description,
  image,
  onClick,
  price,
  title,
  discountPercentage,
}: IProps) => {
  return (
    <article
      className="roundedBrTl border-neutral700 hover:border-neutral300 relative z-0 flex flex-col items-center gap-4 overflow-hidden border p-7 pt-0 shadow-lg transition-all"
      test-data="product-card"
    >
      <button className="h-max w-full" onClick={onClick}>
        <ProductImage imageUrl={image} />
        <ProductTitle title={title} />
      </button>
      <ProductCardDescription description={description} />
      <ProductPrice price={price} discountPercentage={discountPercentage} />
      <AddToCartButton productId={id} />
    </article>
  );
};
