import { Ellipsis } from "../../shared";

interface IProps {
  title: string;
}

const ProductTitle = ({ title }: IProps) => {
  return (
    <div className="w-full">
      <Ellipsis
        title={title}
        contentClassName="bold text-xl xs:text-lg tracking-wide mx-auto"
      />
    </div>
  );
};

export default ProductTitle;
