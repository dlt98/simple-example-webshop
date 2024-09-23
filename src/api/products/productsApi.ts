import { PRODUCT_ROUTES } from ".";
import { IProductFetchRes } from "../../types";

export const fetchProducts = async (): Promise<IProductFetchRes> => {
  const response = await fetch(PRODUCT_ROUTES.products);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
