import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const UseSVG = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      // Mouse position inside container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Convert actual pixels to SVG viewBox coordinates
      const svgWidth = 1400;
      const svgHeight = 160;

      const svgX = (x / rect.width) * svgWidth;
      const svgY = (y / rect.height) * svgHeight;

      const newPath = `M 10 100 Q ${svgX} ${svgY} 1400 100`;

      gsap.to(path, {
        attr: {
          d: newPath,
        },
        duration: 0.15,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: {
          d: "M 10 100 Q 700 100 1400 100",
        },
        duration: 1.5,
        ease: "elastic.out(1, 0.1)",
        overwrite: true,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-black h-screen w-full">
      <div
        ref={containerRef}
        className="w-full h-50 flex items-center"
      >
        <svg
          className="w-full"
          height="160"
          viewBox="0 0 1400 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M 10 100 Q 700 100 1400 100"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default UseSVG;