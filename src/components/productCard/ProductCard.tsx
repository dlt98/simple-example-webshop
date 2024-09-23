import { truncateString } from "../../utils";
import { MAX_DESCRIPTION_LENGTH } from "./constants";

interface IProps {
  title: string;
  image: string;
  price: number;
  description: string;
  onClick: () => void;
}

const ProductCard = ({ description, image, onClick, price, title }: IProps) => {
  const parsedDescription = truncateString(description, MAX_DESCRIPTION_LENGTH);

  return (
    <div className="space-y-2 transition-all border rounded w-44 bg-slate-400 border-orange-50">
      <p>{title}</p>
      <p>{parsedDescription}</p>

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
