interface IProps {
  imageUrl: string;
}

export const ProductImage = ({ imageUrl }: IProps) => {
  return (
    <div className="group/product-image relative inline-block w-full bg-transparent">
      <GreyBackground />
      <img
        src={imageUrl}
        alt="Product image"
        className="relative z-10 size-full object-contain transition-all group-hover/product-image:scale-110"
      />
    </div>
  );
};

function GreyBackground() {
  return (
    <div className="flexCenter absoluteCenter z-0 h-3/5 w-full bg-gray-200" />
  );
}
