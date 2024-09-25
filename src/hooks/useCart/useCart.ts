import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "../../types";
import { CART_KEYS } from "../../constants";
import {
  getCartFromStorage,
  setCartToStorage,
  setProductAmount,
} from "./utils";
import { ICartLocalStorage, ICartSingleProduct } from "../../models";
import { DEFAULT_CART } from "./constants";

export const useCart = () => {
  const queryClient = useQueryClient();

  const { data: cart = DEFAULT_CART } = useQuery<ICartLocalStorage>({
    queryKey: [CART_KEYS.cart],
    queryFn: getCartFromStorage,
  });

  const upsertCart = useMutation({
    mutationFn: (productId: IProduct["id"], amount = 1) => {
      const product: ICartSingleProduct = { amount, id: productId };
      const updatedLocalStorage = setProductAmount(cart, product);

      setCartToStorage(updatedLocalStorage);

      // Necessary to properly use addToCart
      return Promise.resolve(updatedLocalStorage);
    },
    onSuccess: (data) => {
      queryClient.setQueryData([CART_KEYS.cart], data);
    },
  });

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
    upsertCart,

    // removeFromCart,
    // clearCart,
  };
};
