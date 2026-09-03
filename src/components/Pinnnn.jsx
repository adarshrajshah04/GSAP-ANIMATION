import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pinnnn = () => {
  useEffect(() => {
    gsap.to(".ppage h1", {
      transform: "translateX(-150%)",
      scrollTrigger: {
        trigger: ".ppage",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  return (
    <div>
      <div className="ppage h-screen w-full bg-black flex items-center  overflow-hidden">
        <h1 className=" text-[30vw] text-white  whitespace-nowrap font-bold ">
          Lorem ipsum dolor sit,
        </h1>
      </div>
      <div className=" h-screen w-full bg-blue-200 flex items-center  overflow-hidden">
        <h1 className=" text-[30vw] text-white  whitespace-nowrap font-bold ">
          Lorem ipsum dolor sit,</h1>
      </div>
    </div>
  );
};

export default Pinnnn;
