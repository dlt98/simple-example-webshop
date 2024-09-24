import {
  ProductCardDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./components";

interface IProps {
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
  description,
  image,
  onClick,
  price,
  title,
  discountPercentage,
}: IProps) => {
  return (
    <article className="relative z-0 flex flex-col items-center gap-4 pt-0 transition-all border shadow-lg p-7 roundedBrTl border-neutral700 hover:border-neutral300 ">
      <button className="w-full h-max" onClick={onClick}>
        <ProductImage imageUrl={image} />
        <ProductTitle title={title} />
      </button>
      <ProductCardDescription description={description} />
      <ProductPrice price={price} discountPercentage={discountPercentage} />
      <button onClick={onClick}>CLICK ME</button>
    </article>
  );
};

export default ProductCard;
