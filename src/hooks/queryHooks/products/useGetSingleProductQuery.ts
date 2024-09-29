import { fetchSingleProduct } from "@/api";
import { PRODUCT_KEYS } from "@/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetSingleProductQuery = (productId: number | null) => {
  return useQuery({
    queryKey: [PRODUCT_KEYS.singleProduct, productId],
    queryFn: () => fetchSingleProduct(productId),
  });
};
