import { Badge, EBadgeVariant } from "@/components/shared";
import { formatDecimals } from "@/utils";

interface IProps {
  discountedPrice: number | null;
  price: number;
  discountPercentage: number | null;
}

const ProductPricing = ({
  discountPercentage,
  discountedPrice,
  price,
}: IProps) => {
  return (
    <div className="mb-4 flex items-center gap-3">
      {discountedPrice && (
        <span className="mr-2 text-3xl font-bold text-green-600">
          ${discountedPrice.toFixed(2)}
        </span>
      )}
      <span className="text-xl text-gray-500 line-through">
        ${price.toFixed(2)}
      </span>
      {discountPercentage && (
        <Badge
          variant={EBadgeVariant.red}
          text={`${formatDecimals(discountPercentage)}% OFF`}
        />
      )}
    </div>
  );
};

export default ProductPricing;
