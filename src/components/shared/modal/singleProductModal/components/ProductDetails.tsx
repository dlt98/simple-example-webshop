import { IProduct } from "@/types";

interface IProps {
  product: IProduct;
}

export const ProductDetails = ({ product }: IProps) => {
  const options = getOptions(product);

  return (
    <div>
      {options.map((option) => (
        <div
          key={option.label}
          className={`mb-4 ${option.isIndividual ? "grid grid-cols-2 gap-4" : ""}`}
        >
          <span className="font-semibold">{option.label}</span> {option.value}
        </div>
      ))}
    </div>
  );
};

function getOptions(product: IProduct) {
  const {
    brand,
    category,
    sku,
    stock,
    rating,
    weight,
    dimensions,
    tags,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    minimumOrderQuantity,
  } = product;

  const options: {
    label: string;
    value: string | number;
    isIndividual?: boolean;
  }[] = [
    {
      label: "Brand:",
      value: brand,
    },
    {
      label: "Category:",
      value: category,
    },
    {
      label: "SKU:",
      value: sku,
    },
    {
      label: "Stock:",
      value: stock,
    },
    {
      label: "Rating:",
      value: rating.toFixed(1),
    },
    {
      label: "Weight:",
      value: `${weight}g`,
    },
    {
      label: "Dimensions:",
      value: `${dimensions.width}" x ${dimensions.height}" x ${dimensions.depth}"`,
      isIndividual: true,
    },
    {
      label: "Tags:",
      value: tags.join(", "),
      isIndividual: true,
    },
    {
      label: "Warranty:",
      value: warrantyInformation,
      isIndividual: true,
    },
    {
      label: "Shipping:",
      value: shippingInformation,
      isIndividual: true,
    },
    {
      label: "Return Policy:",
      value: returnPolicy,
      isIndividual: true,
    },
    {
      label: "Minimum Order Quantity:",
      value: minimumOrderQuantity,
      isIndividual: true,
    },
  ];

  return options;
}
