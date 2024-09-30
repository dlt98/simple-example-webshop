import { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/core";
import { useDebounce, useGetProductsQuery } from "@/hooks";
import { FILTER_QUERY_KEYS } from "@/constants";

const SEARCH_DELAY = 500;

export const SearchInput = () => {
  const { setQueryParam, getQueryParam, searchParams } = useGetProductsQuery();
  const [searchTerm, setSearchTerm] = useState(
    getQueryParam(FILTER_QUERY_KEYS.search) || "",
  );

  const handleSearch = useCallback(
    (term: string) => {
      setQueryParam([
        { key: FILTER_QUERY_KEYS.search, value: term },
        { key: FILTER_QUERY_KEYS.category },
        { key: FILTER_QUERY_KEYS.skip, value: "0" },
      ]);
    },
    [setQueryParam],
  );

  const resetSearch = () => {
    setSearchTerm("");
    setQueryParam([{ key: FILTER_QUERY_KEYS.search }]);
  };

  useEffect(() => {
    // Unable to search and have a selected category at the same time
    // https://dummyjson.com/docs/products#products-category
    if (!!searchTerm && getQueryParam(FILTER_QUERY_KEYS.category)) {
      resetSearch();
    }
  }, [searchParams]);

  const debouncedSearch = useDebounce(handleSearch, SEARCH_DELAY);

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <Input
      value={searchTerm}
      setValue={handleInputChange}
      label="Search input"
    />
  );
};
