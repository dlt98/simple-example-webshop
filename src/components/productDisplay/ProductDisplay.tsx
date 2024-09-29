import { useGetProductsQuery } from "@/hooks";
import { ProductCard } from "../productCard";
import { SingleProductModal } from "../shared/modal/singleProductModal/SingleProductModal";
import { useState } from "react";

export const ProductDisplay = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const { data, isLoading, handleNextPage, handlePreviousPage } =
    useGetProductsQuery();

  const onModalClose = () => {
    setProductId(null);
  };

  if (isLoading) return <div>THIS IS FETCHING</div>;

  console.log("data", data);

  return (
    <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {data?.products.map(
        ({ description, title, price, thumbnail, discountPercentage, id }) => {
          return (
            <ProductCard
              id={id}
              description={description}
              title={title}
              price={price}
              discountPercentage={discountPercentage}
              image={thumbnail}
              onClick={() => setProductId(id)}
              key={id}
            />
          );
        },
      )}
      <button onClick={handleNextPage}>NEXT</button>
      <button onClick={handlePreviousPage}>PREV</button>
      <SingleProductModal productId={productId} onModalClose={onModalClose} />
    </div>
  );
};
