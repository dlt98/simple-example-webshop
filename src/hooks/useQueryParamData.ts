import { useQuery, useQueryClient, QueryKey } from "@tanstack/react-query";
import { useState, useEffect, useCallback } from "react";

export type QueryParams = Record<string, string>;

type FetchFunction<T> = (params: QueryParams | null) => Promise<T>;

// Create a custom event for URL changes
const URL_CHANGE_EVENT = "custom-url-change";

// Function to dispatch the custom event
const dispatchUrlChangeEvent = () => {
  window.dispatchEvent(new Event(URL_CHANGE_EVENT));
};

interface IQueryParamItem {
  key: string;
  value?: string;
}
export interface IUseQueryParamDataResult<T = unknown> {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  setQueryParam: (items: IQueryParamItem | IQueryParamItem[]) => void;
  getQueryParam: (key: string) => string | null;
  getAllQueryParams: () => QueryParams | null;
}

export const useQueryParamData = <T>(
  queryKey: QueryKey,
  fetchFunction: FetchFunction<T>,
): IUseQueryParamDataResult<T> => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    new URLSearchParams(window.location.search),
  );

  const updateURL = useCallback((newSearchParams: URLSearchParams) => {
    const parsedSearchParams = newSearchParams.toString();
    const newUrl = `${window.location.pathname}${parsedSearchParams ? `?${parsedSearchParams}` : ""}`;

    // Only update the URL if it has changed
    if (window.location.search !== parsedSearchParams) {
      window.history.pushState({}, "", newUrl);
    }
  }, []);

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

    [getUpdatedQueryKey, queryClient, updateURL],
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
  };
};
