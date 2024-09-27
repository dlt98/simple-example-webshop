import { ProductCard } from "./components/productCard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import { ProductFilters } from "./components/filters";
import { useQueryParamData } from "./hooks";
import { PRODUCT_KEYS } from "./constants";
import { fetchProducts } from "./api/products/productsApi";

function App() {
  const { data, isLoading } = useQueryParamData(
    [PRODUCT_KEYS.products],
    fetchProducts,
    true,
  );

  console.log("isLoading", isLoading);

  if (isLoading) return <div>THIS IS FETCHING</div>;

  console.log("data", data);
  return (
    <Layout>
      <ProductFilters />
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data?.products.map(
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
                onClick={() => console.log("Click me")}
                key={id}
              />
            );
          },
        )}
      </div>
      <ToastContainer position="bottom-center" />
    </Layout>
  );
}

export default App;
