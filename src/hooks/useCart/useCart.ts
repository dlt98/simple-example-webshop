import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProductFetchRes } from "@/types";
import { CART_KEYS } from "@/constants";
import {
  findSpecificProduct,
  getCartFromStorage,
  setCartToStorage,
  setProductAmount,
} from "./utils";
import { ICartLocalStorage, ICartSingleProduct } from "@/models";
import { DEFAULT_CART } from "./constants";
import { toast } from "react-toastify";
import { IUpsertCartMutationData } from "./types";
import { formatDecimals } from "@/utils";
import { useGetProductsQuery } from "../queryHooks";

export const useCart = () => {
  const queryClient = useQueryClient();
  const { getUpdatedQueryKey } = useGetProductsQuery();

  const { data: cart = DEFAULT_CART } = useQuery<ICartLocalStorage>({
    queryKey: [CART_KEYS.cart],
    queryFn: getCartFromStorage,
    structuralSharing: false,
  });

  const cartTotal = formatDecimals(
    cart.products.reduce(
      (acc, product) => acc + product.price * product.amount,
      0,
    ),
  );

  const upsertCartMutation = useMutation({
    mutationFn: ({ productId, amount = 1 }: IUpsertCartMutationData) => {
      const allProducts =
        queryClient.getQueryData<IProductFetchRes>(getUpdatedQueryKey());

      const productData = findSpecificProduct(allProducts, productId);

      if (!productData) {
        // This should never happen
        toast("Error fetching products", {
          type: "error",
        });

        return Promise.reject();
      }

      const product: ICartSingleProduct = {
        amount,
        id: productId,
        imageSrc: productData.thumbnail,
        name: productData.title,
        price: productData.price,
      };

      const updatedLocalStorage = setProductAmount({ ...cart }, product);

      setCartToStorage(updatedLocalStorage);

      // Necessary to properly use addToCart
      return Promise.resolve(updatedLocalStorage);
    },
    onSuccess: () => {
      toast("Cart successfully updated!", { type: "success" });

      queryClient.invalidateQueries({
        queryKey: [CART_KEYS.cart],
      });
    },
  });

  const clearCart = () => {
    const updatedLocalStorage = DEFAULT_CART;
    setCartToStorage(updatedLocalStorage);

    queryClient.setQueryData([CART_KEYS.cart], updatedLocalStorage);
  };

  return {
    upsertCartMutation,
    cart,
    cartTotal,
    clearCart,
  };
};
