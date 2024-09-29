import { truncateString } from "@/utils";
import { MAX_DESCRIPTION_LENGTH } from "../constants";

interface IProps {
  description: string;
}

export const ProductCardDescription = ({ description }: IProps) => {
  const parsedDescription = truncateString(description, MAX_DESCRIPTION_LENGTH);

  return (
    <p className="text-neutral300 mb-4 line-clamp-5 whitespace-break-spaces break-words text-center font-medium">
      {parsedDescription}
    </p>
  );
};
