import { useState } from "react";

export const useImagesSwiper = (imagePaths: string[]) => {
  const [index, setIndex] = useState<number>(1);
  const previousImage = imagePaths[index - 1];
  const currentImage = imagePaths[index];
  const nextImage = imagePaths[index + 1];

  function increment() {
    if (
      index === imagePaths.length - 1 ||
      index + 1 === imagePaths.length - 1
    ) {
      setIndex(1);
      return;
    }
    setIndex((prev) => prev + 1);
  }

  function decrement() {
    if (index <= 0 || index - 1 <= 0) {
      setIndex(imagePaths.length - 1);
    }
    setIndex((prev) => prev - 1);
  }

  return {
    previousImage,
    currentImage,
    nextImage,
    increment,
    decrement,
  };
};
