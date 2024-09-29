import { useEffect } from "react";
import { disableScrollOnBody } from "@/utils";

export const useBodyScroll = (isOpen: boolean) => {
  useEffect(() => {
    disableScrollOnBody(isOpen);

    return () => {
      if (isOpen) disableScrollOnBody(true);
    };
  }, [isOpen]);
};
