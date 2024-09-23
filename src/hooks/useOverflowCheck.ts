import { useEffect, useRef, useState } from "react";
import { useDebounce } from ".";

const useOverflowCheck = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const [isOverflown, setIsOverflown] = useState(false);

  const handleResize = useDebounce(() => {
    if (textRef.current) {
      setIsOverflown(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, 500);

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      setIsOverflown(element.scrollWidth > element.clientWidth);

      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return { textRef, isOverflown };
};

export default useOverflowCheck;
