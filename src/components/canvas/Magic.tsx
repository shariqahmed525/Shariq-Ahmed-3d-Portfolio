import { useEffect, useRef } from "react";

const MagicCanvas = () => {
  const magicRef = useRef(null);
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      console.log("Disabling Intersection Observer For Mobile");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const magicElement = document.querySelector("#magic");
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            console.log("The magic element is visible!");
            if (magicElement) {
              magicElement.removeAttribute("disabled");
            }
          } else if (!entry.isIntersecting && entry.intersectionRatio <= 0.3) {
            console.log("The magic element is not visible!");
            if (magicElement) {
              magicElement.setAttribute("disabled", "true");
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (magicRef.current) {
      observer.observe(magicRef.current);
    }

    return () => {
      if (magicRef.current) {
        observer.unobserve(magicRef.current);
      }
    };
  }, []);

  return (
    <div id="magicCover" ref={magicRef}>
      <div id="magic" />
    </div>
  );
};

export default MagicCanvas;
