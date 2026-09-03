import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTiggger = () => {
  useEffect(() => {
    gsap.from("#sbox1", {
      opacity: 0,
      rotate: 720,
      duration: 2,
      scrollTrigger: {
        trigger: "#sbox1",
        scroller: "body",
        start: "top 60%",
        end: "top 30%",
        // markers: true,
        scrub: 3,
      },
    });
  }, []);

  return (
    <div>
       <h1 className=" bg-blue-700 text-white pl-10 pt-10 text-2xl">ScrollTrigger</h1>
      <div className="h-screen w-full bg-blue-700 flex items-center justify-center">
        <div id="sbox1" className="w-80 h-80 bg-blue-500 "> </div>
      </div>
    </div>
  );
};

export default ScrollTiggger;
