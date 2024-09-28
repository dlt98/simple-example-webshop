import { useQuery, useQueryClient, QueryKey } from "@tanstack/react-query";
import { useState, useEffect, useCallback } from "react";
import { URL_CHANGE_EVENT } from "./constants";
import { dispatchUrlChangeEvent, updateURL } from "./utils";
import { FetchFunction, IQueryParamItem, QueryParams } from "./types";

export const useQueryParamData = <T>(
  queryKey: QueryKey,
  fetchFunction: FetchFunction<T>,
) => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams(window.location.search),
  );

  const getAllQueryParams = useCallback((): QueryParams | null => {
    if (!searchParams.size) return null;

    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  const getUpdatedQueryKey = useCallback(
    () => [...queryKey, getAllQueryParams()],
    [getAllQueryParams, queryKey],
  );

  const updateQueryParam = useCallback(
    (newSearchParams: URLSearchParams) => {
      setSearchParams(newSearchParams);
      updateURL(newSearchParams);
      dispatchUrlChangeEvent();

      queryClient.invalidateQueries({
        queryKey: getUpdatedQueryKey(),
      });
    },

    [getUpdatedQueryKey, queryClient],
  );

  useEffect(() => {
    const handleUrlChange = () => {
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener(URL_CHANGE_EVENT, handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener(URL_CHANGE_EVENT, handleUrlChange);
    };
  }, []);

  const setQueryParam = useCallback(
    (items: IQueryParamItem | IQueryParamItem[]): void => {
      const newSearchParams = new URLSearchParams(searchParams);

      const copied = Array.isArray(items) ? [...items] : [items];

      copied.forEach(({ key, value }) => {
        if (value) {
          newSearchParams.set(key, value);
        } else {
          newSearchParams.delete(key);
        }
      });

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

  const { data, isLoading, error } = useQuery<T, unknown>({
    queryKey: getUpdatedQueryKey(),
    queryFn: () => fetchFunction(getAllQueryParams()),
  });

  return {
    data,
    isLoading,
    error,
    setQueryParam,
    getQueryParam,
    getAllQueryParams,
    searchParams,
  };
};
