import { useEffect, useState } from "react";
import React from "react";

interface ScrollHandlerProps {
  onScroll: (hasShadow: boolean) => void;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ onScroll }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setScrolling(true);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 400);

      if (window.scrollY > 10) {
        onScroll(true);
      } else {
        onScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [onScroll]);

  useEffect(() => {
    if (!scrolling) {
      onScroll(false);
    }
  }, [scrolling, onScroll]);

  return null;
};

export default ScrollHandler;
