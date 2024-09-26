import { IUpsertCartMutationData } from "../../../../hooks";
import { ICartSingleProduct } from "../../../../models";

interface IProps extends ICartSingleProduct {
  onQuantityChange: (productQuantity: IUpsertCartMutationData) => void;
}

export const SingleCartItem = ({
  id,
  name,
  price = 0,
  amount,
  imageSrc,
  onQuantityChange,
}: IProps) => {
  const handleQuantityChange = (change: number) => {
    const newQuantity = amount + change;

    onQuantityChange({
      productId: id,
      amount: newQuantity,
    });
  };

  return (
    <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-md">
      <img
        src={imageSrc}
        alt={name}
        className="h-16 w-16 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price?.toFixed(2) ?? "N/A"}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          aria-label="Decrease amount"
        >
          -
        </button>
        <span className="w-8 text-center" aria-label="Item amount">
          {amount}
        </span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          aria-label="Increase amount"
        >
          +
        </button>
      </div>
    </div>
  );
};
