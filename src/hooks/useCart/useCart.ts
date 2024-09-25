import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct, IProductFetchRes } from "../../types";
import { CART_KEYS, PRODUCT_KEYS } from "../../constants";
import {
  findSpecificProduct,
  getCartFromStorage,
  setCartToStorage,
  setProductAmount,
} from "./utils";
import { ICartLocalStorage, ICartSingleProduct } from "../../models";
import { DEFAULT_CART } from "./constants";
import { toast } from "react-toastify";

export const useCart = () => {
  const queryClient = useQueryClient();

  const { data: cart = DEFAULT_CART } = useQuery<ICartLocalStorage>({
    queryKey: [CART_KEYS.cart],
    queryFn: getCartFromStorage,
  });

  const upsertCart = useMutation({
    mutationFn: (productId: IProduct["id"], amount = 1) => {
      const allProducts = queryClient.getQueryData<IProductFetchRes>([
        PRODUCT_KEYS.products,
      ]);

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

      const updatedLocalStorage = setProductAmount(cart, product);

      setCartToStorage(updatedLocalStorage);

      // Necessary to properly use addToCart
      return Promise.resolve(updatedLocalStorage);
    },
    onSuccess: (data) => {
      toast("Item added to cart!", { type: "success" });

      queryClient.setQueryData([CART_KEYS.cart], data); // Potentially not needed
      queryClient.refetchQueries({ queryKey: [CART_KEYS.cart] });
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
    cart,

    // removeFromCart,
    // clearCart,
  };
};
