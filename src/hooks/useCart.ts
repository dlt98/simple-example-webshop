import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../types";
import { ILocalStorage } from "../models";
import { CART_KEYS } from "../constants";

const getCartFromStorage = () => {
  const cart = localStorage.getItem(CART_KEYS.cart);
  return cart ? JSON.parse(cart) : [];
};

const setCartToStorage = (cart: ILocalStorage) => {
  localStorage.setItem(CART_KEYS.cart, JSON.stringify(cart));
};

export const useCart = () => {
  const queryClient = useQueryClient();

  const { data: cart = {} } = useQuery({
    queryKey: [CART_KEYS.cart],
    queryFn: getCartFromStorage,
  });

  const addToCart = useMutation({
    mutationFn: (productId: IProduct["id"]) => {
      const localStorage: ILocalStorage = {
        ...cart,
        productIds: [...(cart?.productIds || []), productId],
      };

      setCartToStorage(localStorage);

      // Necessary to properly use addToCart
      return Promise.resolve(localStorage);
    },
    onSuccess: (data) => {
      queryClient.setQueryData([CART_KEYS.cart], data);
    },
  });

  //   const removeFromCart = useMutation(
  //     (productId: IProduct) => {
  //       const updatedCart = cart.filter((item) => item.id !== productId);
  //       setCartToStorage(updatedCart);
  //       return updatedCart;
  //     },
  //     {
  //       onSuccess: (data) => {
  //         queryClient.setQueryData(CART_KEYS.cart, data);
  //       },
  //     }
  //   );

  //   const clearCart = useMutation(
  //     () => {
  //       setCartToStorage([]);
  //       return [];
  //     },
  //     {
  //       onSuccess: (data) => {
  //         queryClient.setQueryData(CART_KEYS.cart, data);
  //       },
  //     }
  //   );

  return {
    addToCart,

    // removeFromCart,
    // clearCart,
  };
};
