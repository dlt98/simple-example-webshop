interface IProps {
  imageUrl: string;
}

const ProductImage = ({ imageUrl }: IProps) => {
  return (
    <div className="relative inline-block w-full bg-transparent group/product-image">
      <GreyBackground />
      <img
        src={imageUrl}
        alt="Product image"
        className="relative z-10 object-contain transition-all group-hover/product-image:scale-110 size-full"
      />
    </div>
  );
};

function GreyBackground() {
  return (
    <div className="z-0 w-full bg-gray-200 h-3/5 flexCenter absoluteCenter" />
  );
}

export default ProductImage;
