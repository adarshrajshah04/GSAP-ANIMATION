import React, { useEffect, useRef } from "react";

const TextAnimation = () => {
  const adar = useRef(null);
  useEffect(() => {
    let text = adar.current.textContent;
    let splittedText = text.split("");
    let clutter = "";
    splittedText.forEach((a) => {
      clutter += `<span>${a}</span>`;
    });

    adar.current.innerHTML = clutter;
  }, []);
  
  return (
    <div className=" h-screen w-full bg-black flex items-center justify-center">
      <h1 ref={adar} className=" text-2xl text-white">
        Adarsh
      </h1>
    </div>
  );
};

export default TextAnimation;
