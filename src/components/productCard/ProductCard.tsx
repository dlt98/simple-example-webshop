import { Ellipsis } from "../shared/ellipsis";
import { ProductCardDescription } from "./components";

interface IProps {
  title: string;
  image: string;
  price: number;
  description: string;
  onClick: () => void;
}

const ProductCard = ({ description, image, onClick, price, title }: IProps) => {
  return (
    <div className="roundedBrTl transitionColor group relative z-0 border border-neutral700 will-change-transform hover:border-neutral300 hover:bg-product-card-gradient md:h-[492px]">
      <Ellipsis title={title} contentClassName="" />
      <ProductCardDescription description={description} />

      <div>
        <img src={image} alt="Product image" />
      </div>
      <div>
        <p>PRICE</p>
        {price}$
      </div>
      <button onClick={onClick}>CLICK ME</button>
    </div>
  );
};

export default ProductCard;
