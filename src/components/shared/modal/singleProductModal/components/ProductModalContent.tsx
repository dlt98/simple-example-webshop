import { IProduct } from "@/types";
import { AddToCartButton, ImageCarousel } from "@/components/shared";
import ProductPricing from "./ProductPricing";
import { ProductDetails } from "./ProductDetails";
import { CustomerReviews } from "./customerReviews";

interface IProps {
  product: IProduct;
}

export const ProductModalContent = ({ product }: IProps) => {
  const { title, description, images, discountPercentage, price, reviews, id } =
    product;

  // Calculate the discounted price
  const discountedPrice = discountPercentage
    ? price - price * (discountPercentage / 100)
    : null;

  return (
    <div className="flex flex-col gap-8 p-6 md:flex-row">
      <ImageCarousel collectionTitle={title} images={images} />
      <div className="md:w-1/2">
        <h2 className="mb-2 text-3xl font-bold">{title}</h2>
        <p className="mb-4 text-gray-600">{description}</p>
        <ProductPricing
          discountedPrice={discountedPrice}
          price={price}
          discountPercentage={discountPercentage}
        />
        <ProductDetails product={product} />
        <AddToCartButton productId={id} />
        <CustomerReviews reviews={reviews} />
      </div>
    </div>
  );
};
