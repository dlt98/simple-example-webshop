import { Ellipsis } from "../shared/ellipsis";
import { ProductCardDescription, ProductImage } from "./components";

interface IProps {
  title: string;
  image: string;
  price: number;
  description: string;
  onClick: () => void;
}
// Design inspired by
// https://cdn.dribbble.com/users/114038/screenshots/3674970/product_card_design_2x.png

const ProductCard = ({ description, image, onClick, price, title }: IProps) => {
  return (
    <div className="roundedBrTl p-4 transitionColor group relative z-0 border border-neutral700 will-change-transform hover:border-neutral300 hover:bg-product-card-gradient md:h-[492px]">
      <ProductImage imageUrl={image} />
      <Ellipsis title={title} contentClassName="" />
      <ProductCardDescription description={description} />

      <div>
        <p>PRICE</p>
        {price}$
      </div>
      <button onClick={onClick}>CLICK ME</button>
    </div>
  );
};

export default ProductCard;
