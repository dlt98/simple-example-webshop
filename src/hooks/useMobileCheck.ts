import { useEffect, useState } from "react";

import useDebounce from "./useDebounce";

const MD_SCREEN_WIDTH = 768;

export const useMobileCheck = () => {
  const [isScreenMobile, setIsScreenMobile] = useState(false);

  const handleResize = useDebounce(() => {
    setIsScreenMobile(window.innerWidth < MD_SCREEN_WIDTH);
  }, 500);

  useEffect(() => {
    setIsScreenMobile(window.innerWidth < MD_SCREEN_WIDTH);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isScreenMobile;
};
