import { fetchProducts } from "@/api";
import { PRODUCT_KEYS } from "@/constants";
import { useQueryParamData } from "@/hooks";
import { useState, useEffect } from "react";

export const useGetProductsQuery = () => {
  const [page, setPage] = useState(1); // Add state for current page
  const limit = 20; // Define the number of items per page
  const skip = (page - 1) * limit; // Calculate skip based on current page

  const { setQueryParam, ...rest } = useQueryParamData(
    [PRODUCT_KEYS.products],
    fetchProducts,
  );

  useEffect(() => {
    setQueryParam([
      {
        key: "limit",
        value: limit.toString(),
      },
      {
        key: "skip",
        value: skip.toString(),
      },
    ]);
  }, [page]);

  const handleNextPage = () => setPage((prev) => prev + 1); // Function to go to the next page
  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1)); // Function to go to the previous page

  return {
    ...rest,
    setQueryParam,
    handleNextPage,
    handlePreviousPage,
  };
};
