import { useQuery, useQueryClient, QueryKey } from "@tanstack/react-query";
import { useState, useEffect, useCallback } from "react";

type QueryParams = Record<string, string>;

type FetchFunction<T> = (params: QueryParams) => Promise<T>;

interface UseQueryParamDataResult<T> {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  setQueryParam: (key: string, value: string) => void;
  removeQueryParam: (key: string) => void;
  getQueryParam: (key: string) => string | null;
  getAllQueryParams: () => QueryParams;
}

export const useQueryParamData = <T>(
  queryKey: QueryKey,
  fetchFunction: FetchFunction<T>,
): UseQueryParamDataResult<T> => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams(window.location.search),
  );

  const updateURL = useCallback((newSearchParams: URLSearchParams) => {
    const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;
    window.history.pushState({}, "", newUrl);
  }, []);

  const updateQueryParam = useCallback(
    (newSearchParams: URLSearchParams) => {
      setSearchParams(newSearchParams);
      updateURL(newSearchParams);
      queryClient.invalidateQueries({ queryKey });
    },
    [queryClient, queryKey, updateURL],
  );

  useEffect(() => {
    const handlePopState = () => {
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const setQueryParam = useCallback(
    (key: string, value: string): void => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, value);
      updateQueryParam(newSearchParams);
    },
    [searchParams, updateQueryParam],
  );

  const removeQueryParam = useCallback(
    (key: string): void => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete(key);
      updateQueryParam(newSearchParams);
    },
    [searchParams, updateQueryParam],
  );

  const getQueryParam = useCallback(
    (key: string): string | null => {
      return searchParams.get(key);
    },
    [searchParams],
  );

  const getAllQueryParams = useCallback((): QueryParams => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  const { data, isLoading, error } = useQuery<T, unknown>({
    queryKey,
    queryFn: () => fetchFunction(getAllQueryParams()),
  });

  return {
    data,
    isLoading,
    error,
    setQueryParam,
    removeQueryParam,
    getQueryParam,
    getAllQueryParams,
  };
};
