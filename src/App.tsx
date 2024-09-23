import { useQuery } from "@tanstack/react-query";
import { PRODUCT_KEYS } from "./api/products";
import { fetchProducts } from "./api/products/productsApi";
function App() {
  const { data, error, isFetching } = useQuery({
    queryKey: [PRODUCT_KEYS.products],
    queryFn: fetchProducts,
  });

  console.log("data", data);

  return <div>THIS IS THE START PAGE</div>;
}

export default App;
