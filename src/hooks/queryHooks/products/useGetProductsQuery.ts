import { fetchProducts } from "@/api";
import { PRODUCT_KEYS } from "@/constants";
import { useQueryParamData } from "@/hooks";

export const useGetProductsQuery = () => {
  return useQueryParamData([PRODUCT_KEYS.products], fetchProducts);
};
