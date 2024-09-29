import { useState, useEffect } from "react";
import shoppingCartIcon from "@/assets/icons/shopping_cart.svg";
import { twMerge } from "tailwind-merge";
import { ICartSingleProduct } from "@/models";

export const CartButton = ({
  cartProducts,
}: {
  cartProducts: ICartSingleProduct[];
}) => {
  const [cartNumber, setCartNumber] = useState(cartProducts.length);
  const [animationClass, setAnimationClass] = useState("");

  const animationClassHandler = () => {
    setAnimationClass("animate-scale-up");
    setTimeout(() => {
      setAnimationClass("animate-scale-down");
    }, 500);
  };

  useEffect(() => {
    setCartNumber(cartProducts.length);
    animationClassHandler();
  }, [cartProducts]);

  return (
    <div className="relative">
      <img
        src={shoppingCartIcon}
        alt="shopping cart icon"
        className="size-6 text-white"
      />
      {!!cartNumber && (
        <div
          className={twMerge(
            `flexCenter absolute -right-2 -top-2.5 size-5 rounded-full bg-red-500 text-xs text-white transition-all`,
            animationClass,
          )}
        >
          {cartNumber}
        </div>
      )}
    </div>
  );
};
