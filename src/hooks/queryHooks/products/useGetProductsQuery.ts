import { fetchProducts } from "../../../api/products/productsApi";
import { PRODUCT_KEYS } from "../../../constants";
import { useQueryParamData } from "../../useQueryParamData";

export const useGetProductsQuery = () => {
  // const searchParams = new URLSearchParams(window.location.search);

  // const temp = Object.fromEntries(searchParams.entries());
  return useQueryParamData([PRODUCT_KEYS.products], fetchProducts);
};
