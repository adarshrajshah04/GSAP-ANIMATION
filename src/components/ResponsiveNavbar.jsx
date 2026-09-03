import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { TiThMenu } from "react-icons/ti";

const ResponsiveNavbar = () => {
    const menu=useRef(null)
    const play=useRef(null)
    let tl= gsap.timeline()
    useEffect(() => {
        tl.to('#bar',{
            right:0,
            duration:0.6,

        })
        tl.from('#bar h1',{
            x:100,
            opacity:0,
            duration:0.5,
            stagger:0.3
        })
        tl.from('#bar p',{
            opacity:0
        })

        tl.pause()

        menu.current.addEventListener('click',()=>{
            tl.play()
        })
        play.current.addEventListener('click',()=>{
            tl.reverse()
        })

   
    }, [tl])
    
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1597571063304-81f081944ee8?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full h-screen  object-center object-contain '>
      <div className="absolute w-full flex items-center justify-between bg-black/40 px-12 py-6 ">
        <h1 className="text-2xl text-white">Adarsh</h1>
        <p ref={menu} className="text-2xl text-white">
          <TiThMenu />
        </p>
      </div>
      <div id="bar" className="absolute right-[-25%] bottom-0 h-full w-[25%] bg-white/40 backdrop-blur-xl py-25 px-10">
      
        <h1 className="text-xl font-medium mt-2">home</h1>
        <h1 className="text-xl font-medium mt-2">about</h1>
        <h1 className="text-xl font-medium mt-2">services</h1>
        <h1 className="text-xl font-medium mt-2">contact</h1>
        <p ref={play} className=" absolute top-10 right-10 text-xl text-black bg-white px-2 rounded-full">X</p>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
