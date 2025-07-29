import { useEffect, useState } from "react";

export const useDeviceWidth = () => {
  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setDeviceWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setDeviceWidth);
    };
  }, [deviceWidth]);

  return deviceWidth;
};
