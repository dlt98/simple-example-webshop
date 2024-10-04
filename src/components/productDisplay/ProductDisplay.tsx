import { useGetProductsQuery } from "@/hooks";
import { ProductCard } from "../productCard";

import { useState } from "react";
import { Pagination, SingleProductModal, Spinner } from "@/components/shared";
import EmptyContent from "../shared/EmptyContent";

const MAX_PER_PAGE = 20;

export const ProductDisplay = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const { data, isLoading, setQueryParam, isFetched } = useGetProductsQuery();

  const onModalClose = () => {
    setProductId(null);
  };

  if (isFetched && !data?.products.length)
    return (
      <EmptyContent
        icon={<p className="text-4xl">😥</p>}
        title="Sorry we can't find products"
        description="We searched far and wide and still couldn't find your products"
      />
    );

  return (
    <div className="flex flex-col gap-5">
      <div className="product-card-container grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {isLoading ? (
          <Spinner />
        ) : (
          data?.products.map(
            ({
              description,
              title,
              price,
              thumbnail,
              discountPercentage,
              id,
            }) => {
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
          )
        )}
      </div>
      <Pagination
        total={data?.total}
        limit={MAX_PER_PAGE}
        setQueryParam={setQueryParam}
        isFetching={isLoading}
      />
      <SingleProductModal productId={productId} onModalClose={onModalClose} />
    </div>
  );
};
