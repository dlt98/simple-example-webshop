import { PRODUCT_ROUTES } from ".";
import { FILTER_QUERY_KEYS } from "../../components/filters/productFilters/constants";
import { IProductQueryParams, QueryParams } from "../../hooks";
import { IProductFetchRes } from "../../types";

export const fetchProducts = async (
  query: QueryParams | null,
): Promise<IProductFetchRes> => {
  const url = query
    ? appendToUrl(PRODUCT_ROUTES.products, query as any as IProductQueryParams)
    : PRODUCT_ROUTES.products;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function appendToUrl(baseUrl: string, query: IProductQueryParams) {
  const searchParams = new URLSearchParams(window.location.search);

  if (query.category) {
    baseUrl = `${baseUrl}/category/${query.category}`;

    searchParams.delete(FILTER_QUERY_KEYS.category);
  }

  const newQueryString = searchParams.toString();

  const res = `${baseUrl}${newQueryString ? `?${newQueryString}` : ""}`;

  return res;
}
