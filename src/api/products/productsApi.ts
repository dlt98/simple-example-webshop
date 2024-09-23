import { PRODUCT_ROUTES } from ".";

export const fetchProducts = async () => {
  const response = await fetch(PRODUCT_ROUTES.products);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
