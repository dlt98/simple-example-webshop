import { truncateString } from "../../../utils";
import { MAX_DESCRIPTION_LENGTH } from "../constants";

interface IProps {
  description: string;
}

const ProductCardDescription = ({ description }: IProps) => {
  const parsedDescription = truncateString(description, MAX_DESCRIPTION_LENGTH);

  return (
    <div className="relative z-99">
      <p className="mb-4 line-clamp-5 whitespace-break-spaces break-words font-medium text-neutral300 max-md:!hidden">
        {parsedDescription}
      </p>
    </div>
  );
};

export default ProductCardDescription;
