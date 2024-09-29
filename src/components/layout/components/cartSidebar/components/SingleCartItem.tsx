import { IUpsertCartMutationData } from "@/hooks";
import { ICartSingleProduct } from "@/models";
import { formatDecimals } from "@/utils";

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
    <div className="flex w-full items-center gap-4 rounded-lg border bg-white p-4 shadow-md max-sm:flex-col">
      <div className="flexCenter">
        <img
          src={imageSrc}
          alt={name}
          className="size-16 rounded object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">${formatDecimals(price) ?? "N/A"}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <CircularButton onClick={handleQuantityChange} />
        <span className="w-8 text-center" aria-label="Item amount">
          {amount}
        </span>
        <CircularButton onClick={handleQuantityChange} isPlus />
      </div>
    </div>
  );
};

function CircularButton({
  onClick,
  isPlus,
}: {
  onClick: (value: number) => void;
  isPlus?: boolean;
}) {
  const label = isPlus ? "+" : "-";
  const ariaLabel = isPlus ? "Increase" : "Decrease";

  return (
    <button
      onClick={() => onClick(isPlus ? 1 : -1)}
      className="flexCenter size-8 rounded-full bg-gray-200 hover:bg-gray-300"
      aria-label={`${ariaLabel} amount"`}
    >
      {label}
    </button>
  );
}
