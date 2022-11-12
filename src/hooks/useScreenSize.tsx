import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const mobileQuery = matchMedia("(max-width: 650px)");
  const desktopQuery = matchMedia("(min-width: 1440px)");

  const [isMobileSize, setIsMobileSize] = useState(false);
  const [isDesktopSize, setIsDesktopSize] = useState(false);



  useEffect(() => {
    setIsMobileSize(mobileQuery.matches);
    setIsDesktopSize(desktopQuery.matches);

    mobileQuery.addEventListener("change", (e) => setIsMobileSize(e.matches));
    desktopQuery.addEventListener("change", (e) => setIsDesktopSize(e.matches));

    return () => {
      mobileQuery.removeEventListener("change", (e) => setIsMobileSize(e.matches));
      desktopQuery.removeEventListener("change", (e) => setIsDesktopSize(e.matches));
    }
  }, [])

  return { isMobileSize, isDesktopSize };
};