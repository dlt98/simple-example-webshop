import { fetchProducts } from "@/api/products/productsApi";
import { PRODUCT_KEYS } from "@/constants";
import { useQueryParamData } from "@/hooks";
import { ProductCard } from "../productCard";

export const ProductDisplay = () => {
  const { data, isLoading } = useQueryParamData(
    [PRODUCT_KEYS.products],
    fetchProducts,
  );

  if (isLoading) return <div>THIS IS FETCHING</div>;

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
              onClick={() => alert("Open modal")}
              key={id}
            />
          );
        },
      )}
    </div>
  );
};
