import { useCallback, useEffect, useState } from "react";
import { Input } from "../../../core";
import { useDebounce, useGetProductsQuery } from "../../../../hooks";
import { FILTER_QUERY_KEYS } from "../constants";

const SEARCH_DELAY = 500;

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setQueryParam, getQueryParam, searchParams } = useGetProductsQuery();

  const handleSearch = useCallback(
    (term: string) => {
      setQueryParam([
        { key: FILTER_QUERY_KEYS.search, value: term },
        { key: FILTER_QUERY_KEYS.category, value: undefined },
      ]);
    },
    [setQueryParam],
  );

  useEffect(() => {
    // Unable to search and have a selected category at the same time
    // https://dummyjson.com/docs/products#products-category
    if (!!searchTerm && getQueryParam(FILTER_QUERY_KEYS.category)) {
      setSearchTerm("");
      handleSearch("");
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
