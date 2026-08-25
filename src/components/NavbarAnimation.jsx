import React, { useEffect } from "react";
import gsap  from 'gsap'

const NavbarAnimation = () => {
    useEffect(() => {
      let t1=gsap.timeline()

      t1.from('.logo',{
        x:-30,
        delay:1,
        duration:1,
        opacity:0,
        scale:0.5,
      })
      t1.from('.page h1',{
        x:100,
        duration:1,
        opacity:0,
        stagger:0.3,

      })
        
     
    }, [])
    

  return (
    <div className="w-full h-screen bg-black text-white">
      <div className="bg-red-600 flex justify-between px-12 py-4 " >
        <h1 className="logo text-xl font-bold">Logo</h1>
        <div className="page  flex gap-10">
          <h1>home</h1>
          <h1>About</h1>
          <h1>services</h1>
          <h1>contact</h1>
        </div>
      </div>
    </div>
  );
};

export default NavbarAnimation;
