import { Ellipsis } from "../../shared";

interface IProps {
  title: string;
}

const ProductTitle = ({ title }: IProps) => {
  return (
    <h2 className="w-full">
      <Ellipsis
        title={title}
        contentClassName="bold text-lg sm:text-xl lg:text-2xl tracking-wide mx-auto"
      />
    </h2>
  );
};

export default ProductTitle;
