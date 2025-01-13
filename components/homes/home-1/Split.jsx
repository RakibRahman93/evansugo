"use client";

import { useEffect } from "react";

export default function Split() {
  useEffect(() => {
    const addPaddingRight = () => {
      document.getElementById("paddingRight").style.paddingRight = `${
        (window.innerWidth -
          document.getElementById("paddingRightContainer").offsetWidth) /
        2
      }px`;
    };

    addPaddingRight();

    window.addEventListener("resize", addPaddingRight);
    return () => {
      window.removeEventListener("resize", addPaddingRight);
    };
  }, []);
  return <></>;
}
