import { CART_KEYS } from "@/constants";
import { ICartLocalStorage, ICartSingleProduct } from "@/models";
import { IProduct, IProductFetchRes } from "@/types";
import { DEFAULT_CART } from "./constants";

export const getCartFromStorage = (): ICartLocalStorage => {
  const cart = localStorage.getItem(CART_KEYS.cart);

  return cart ? JSON.parse(cart) : DEFAULT_CART;
};

export const setCartToStorage = (cart: ICartLocalStorage) => {
  localStorage.setItem(CART_KEYS.cart, JSON.stringify(cart));
};

// Function to set the amount of a product in the cart
export const setProductAmount = (
  cart: ICartLocalStorage,
  newProduct: ICartSingleProduct,
): ICartLocalStorage => {
  if (newProduct.amount === 0) {
    return removeProductFromCart(cart, newProduct.id);
  }

  return updateProductAmount(cart, newProduct);
};

export const findSpecificProduct = (
  fetchedProducts: IProductFetchRes | undefined,
  productId: number,
) => {
  return fetchedProducts?.products.find((product) => product.id === productId);
};

// TEST:
function updateProductAmount(
  cart: ICartLocalStorage,
  newProduct: ICartSingleProduct,
): ICartLocalStorage {
  const copiedProducts = [...cart.products];

  const existingProductIndex = copiedProducts.findIndex(
    (product) => product.id === newProduct.id,
  );

  if (existingProductIndex > -1) {
    copiedProducts[existingProductIndex].amount = newProduct.amount;
  } else {
    copiedProducts.push(newProduct);
  }

  cart.products = copiedProducts;

  return cart;
}

function removeProductFromCart(
  cart: ICartLocalStorage,
  productId: IProduct["id"],
): ICartLocalStorage {
  return {
    ...cart,
    products: cart.products.filter((product) => product.id !== productId),
  };
}
