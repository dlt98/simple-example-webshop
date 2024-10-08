import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductFilters } from "@/components/filters";
import { ProductDisplay } from "@/components/productDisplay";
import { Layout } from "@/components/layout";

function App() {
  return (
    <Layout className="space-y-5">
      <ProductFilters />
      <ProductDisplay />
      <ToastContainer position="bottom-center" />
    </Layout>
  );
}

export default App;
