import { BASE_ROUTE } from "../routes";

export const PRODUCT_ROUTES = {
  products: `${BASE_ROUTE}/products`,
  singleProduct: (productId: number) => `${BASE_ROUTE}/products/${productId}`,
};
