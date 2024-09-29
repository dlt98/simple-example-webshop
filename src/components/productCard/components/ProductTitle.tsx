import { Ellipsis } from "@/components/shared";

interface IProps {
  title: string;
}

export const ProductTitle = ({ title }: IProps) => {
  return (
    <h2 className="w-full">
      <Ellipsis
        title={title}
        contentClassName="bold text-lg sm:text-xl lg:text-2xl tracking-wide mx-auto"
      />
    </h2>
  );
};
