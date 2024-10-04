import { useGetProductsQuery } from "@/hooks";
import { ProductCard } from "../productCard";

import { useEffect, useState } from "react";
import { Pagination, SingleProductModal, Spinner } from "@/components/shared";

const MAX_PER_PAGE = 20;

export const ProductDisplay = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const { data, isLoading, setQueryParam, error, searchParams, getQueryParam } =
    useGetProductsQuery();

  const onModalClose = () => {
    setProductId(null);
    setQueryParam([{ key: "product" }]);
  };

  const onModalOpen = (productId: number) => {
    setProductId(productId);

    setQueryParam([{ key: "product", value: productId.toString() }]);
  };

  useEffect(() => {
    const existingProductId = getQueryParam("product");

    if (existingProductId) setProductId(+existingProductId);
  }, []);

  if (error) {
    return <div>ERRRO HAS OCCURED</div>;
  }

  return (
    <div className="space-y-5">
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
                  onClick={() => onModalOpen(id)}
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
        searchParams={searchParams}
        getQueryParam={getQueryParam}
      />
      <SingleProductModal productId={productId} onModalClose={onModalClose} />
    </div>
  );
};
