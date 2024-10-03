import { PRODUCT_ROUTES } from ".";
import { QueryParams, IProductQueryParams } from "@/hooks";
import { IProduct, IProductFetchRes } from "@/types";
import { appendToUrl } from "./utils";

export const fetchProducts = async (
  query: QueryParams | IProductQueryParams | null,
): Promise<IProductFetchRes> => {
  const url = appendToUrl(
    PRODUCT_ROUTES.products,
    query as IProductQueryParams,
  );

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchSingleProduct = async (
  productId: number | null,
): Promise<IProduct | null> => {
  if (!productId) return null;

  const response = await fetch(PRODUCT_ROUTES.singleProduct(productId));

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
