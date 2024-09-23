import { Ellipsis } from "../../shared";

interface IProps {
  title: string;
}

const ProductTitle = ({ title }: IProps) => {
  return (
    <div className="w-full">
      <Ellipsis
        title={title}
        contentClassName="bold text-lg sm:text-xl lg:text-2xl tracking-wide mx-auto"
      />
    </div>
  );
};

export default ProductTitle;
