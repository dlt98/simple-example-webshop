import { fetchProducts } from "../../../api/products/productsApi";
import { PRODUCT_KEYS } from "../../../constants";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = () => {
  return useQuery({
    queryKey: [PRODUCT_KEYS.products],
    queryFn: fetchProducts,
  });
};
