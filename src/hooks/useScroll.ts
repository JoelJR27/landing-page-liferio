import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrolledHeight, setScrolledHeight] = useState<number>(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolledHeight(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScrolledHeight(window.scrollY);
      });
    };
  });
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    scrolledHeight,
    backToTop,
  };
};
