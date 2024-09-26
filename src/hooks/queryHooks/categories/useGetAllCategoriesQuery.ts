import { fetchAllCategories } from "../../../api/categories";
import { CATEGORY_KEYS } from "../../../constants";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsQuery = () => {
  return useQuery({
    queryKey: [CATEGORY_KEYS.allCategories],
    queryFn: fetchAllCategories,
  });
};
