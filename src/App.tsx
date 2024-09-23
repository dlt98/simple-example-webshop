import { useQuery } from "@tanstack/react-query";
import { PRODUCT_KEYS } from "./api/products";
import { fetchProducts } from "./api/products/productsApi";
import { ProductCard } from "./components/productCard";
function App() {
  const { data, isFetching } = useQuery({
    queryKey: [PRODUCT_KEYS.products],
    queryFn: fetchProducts,
  });

  if (isFetching) return <div>THIS IS FETCHING</div>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.products.map(({ description, title, price, thumbnail }) => {
        return (
          <ProductCard
            description={description}
            title={title}
            price={price}
            image={thumbnail}
            onClick={() => console.log("Click me")}
          />
        );
      })}
    </div>
  );
}

export default App;
