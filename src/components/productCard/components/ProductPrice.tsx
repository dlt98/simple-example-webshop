import { Badge, EBadgeVariant } from "@/components/shared";

export interface IProductPriceProps {
  price: number;
  discountPercentage?: number;
}

export const ProductPrice = ({
  price,
  discountPercentage,
}: IProductPriceProps) => {
  // Calculate the discounted price
  const discountedPrice = discountPercentage
    ? price - price * (discountPercentage / 100)
    : null;

  return (
    <div className="flex flex-col items-center">
      <Badge variant={EBadgeVariant.red} text={`${discountPercentage}% OFF`} />
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-green-600">
          ${discountedPrice?.toFixed(2)}
        </span>
        <span className="text-sm text-gray-500 line-through">
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
