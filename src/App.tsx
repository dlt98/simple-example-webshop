import { useQuery } from "@tanstack/react-query";
import { PRODUCT_KEYS } from "./api/products";
import { fetchProducts } from "./api/products/productsApi";
function App() {
  const { data, isFetching } = useQuery({
    queryKey: [PRODUCT_KEYS.products],
    queryFn: fetchProducts,
  });

  if (isFetching) return <div>THIS IS FETCHING</div>;

  return (
    <div>
      {data?.products.map((product) => {
        return <p>{product.title}</p>;
      })}
    </div>
  );
}

export default App;
