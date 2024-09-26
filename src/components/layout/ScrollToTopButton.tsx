import { useEffect, useState } from "react";
import { Button, BUTTON_VARIANT } from "../core";
import { twMerge } from "tailwind-merge";

const SCROLL_TRIGGER = 500;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > SCROLL_TRIGGER);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      className={twMerge(
        `flexCenter fixed bottom-5 right-5 z-10 size-12 animate-bounce rounded-full bg-blue-500 text-xl text-white transition-opacity duration-300`,
        isVisible ? "opacity-100" : "pointer-events-none z-10 opacity-0",
      )}
      variant={BUTTON_VARIANT.ICON}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </Button>
  );
};

export default ScrollToTop;
