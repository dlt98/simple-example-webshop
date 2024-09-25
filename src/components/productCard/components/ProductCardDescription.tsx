import { truncateString } from "../../../utils";
import { MAX_DESCRIPTION_LENGTH } from "../constants";

interface IProps {
  description: string;
}

const ProductCardDescription = ({ description }: IProps) => {
  const parsedDescription = truncateString(description, MAX_DESCRIPTION_LENGTH);

  return (
    <p className="mb-4 font-medium text-center break-words text-neutral300 line-clamp-5 whitespace-break-spaces">
      {parsedDescription}
    </p>
  );
};

export default ProductCardDescription;
