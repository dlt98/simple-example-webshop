interface IProps {
  imageUrl: string;
}

const ProductImage = ({ imageUrl }: IProps) => {
  return (
    <div className="relative inline-block bg-transparent">
      <GreyBackground />
      <img
        src={imageUrl}
        alt="Product image"
        className="relative z-10 object-contain size-full"
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
