import { useEffect, useState } from "react";

export const useResize = () => {
  const [direction, setDirection] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 768 ? "vertical" : "tab";
    }
  });

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 768) {
        setDirection("vertical");
      } else {
        setDirection("tab");
      }
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { direction };
};
