import {
  ProductCardDescription,
  ProductImage,
  ProductTitle,
} from "./components";

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
    <div className="relative z-0 flex flex-col items-center pt-0 transition-all border shadow-lg p-7 delay-50000 roundedBrTl border-neutral700 hover:border-neutral300 hover:scale-105">
      <ProductImage imageUrl={image} />
      <ProductTitle title={title} />
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
