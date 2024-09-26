import { useMemo } from "react";
import { fetchAllCategories } from "../../../api/categories";
import { CATEGORY_KEYS } from "../../../constants";
import { useQuery } from "@tanstack/react-query";
import { parseCategoriesToSelect } from "../../../utils";

export const useGetCategoriesQuery = () => {
  const queryData = useQuery({
    queryKey: [CATEGORY_KEYS.allCategories],
    queryFn: fetchAllCategories,
  });

  const parsedCategories = useMemo(
    () => parseCategoriesToSelect(queryData.data) || [],
    [queryData.data],
  );

  return { ...queryData, parsedCategories };
};
