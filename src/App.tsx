import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import { ProductFilters } from "./components/filters";
import { ProductDisplay } from "./components/productDisplay";

function App() {
  return (
    <Layout>
      <ProductFilters />
      <ProductDisplay />
      <ToastContainer position="bottom-center" />
    </Layout>
  );
}

export default App;
