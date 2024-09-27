import { PRODUCT_ROUTES } from ".";
import { IProductQueryParams, QueryParams } from "../../hooks";
import { IProductFetchRes } from "../../types";

export const fetchProducts = async (
  query: QueryParams,
): Promise<IProductFetchRes> => {
  const response = await fetch(
    appendToUrl(PRODUCT_ROUTES.products, query as IProductQueryParams),
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function appendToUrl(baseUrl: string, query?: IProductQueryParams) {
  if (!query) return baseUrl;

  return `${baseUrl}/category/${query.category}`;
}
