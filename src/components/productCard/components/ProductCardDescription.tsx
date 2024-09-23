import { truncateString } from "../../../utils";
import { MAX_DESCRIPTION_LENGTH } from "../constants";

interface IProps {
  description: string;
}

const ProductCardDescription = ({ description }: IProps) => {
  const parsedDescription = truncateString(description, MAX_DESCRIPTION_LENGTH);

  return (
    <p className="mb-4 font-medium break-words line-clamp-5 whitespace-break-spaces text-neutral300">
      {parsedDescription}
    </p>
  );
};

export default ProductCardDescription;
