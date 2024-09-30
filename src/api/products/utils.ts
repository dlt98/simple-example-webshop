import { FILTER_QUERY_KEYS } from "@/constants";
import { IProductQueryParams } from "@/hooks";

export const appendToUrl = (baseUrl: string, query: IProductQueryParams) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (query.category) {
    baseUrl = `${baseUrl}/category/${query.category}`;

    searchParams.delete(FILTER_QUERY_KEYS.category);
  }

  if (query[FILTER_QUERY_KEYS.search as keyof IProductQueryParams]) {
    baseUrl = `${baseUrl}/search`;
  }

  const newQueryString = searchParams.toString();

  const res = `${baseUrl}${newQueryString ? `?${newQueryString}` : ""}`;

  return res;
};
