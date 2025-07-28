import { useState } from "react";

export const useAsideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    handleOpenMenu,
  };
};
