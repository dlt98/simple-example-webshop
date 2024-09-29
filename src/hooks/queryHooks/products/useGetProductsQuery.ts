import { fetchProducts } from "../../../api/products/productsApi";
import { PRODUCT_KEYS } from "../../../constants";
import { useQueryParamData } from "../../useQueryParamData/useQueryParamData";

export const useGetProductsQuery = () => {
  return useQueryParamData([PRODUCT_KEYS.products], fetchProducts);
};
