import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'


const CustomeCursor = () => {
    const main =useRef(null)
    const cursor =useRef(null)
    const image =useRef(null)

    useEffect(() => {
        main.current.addEventListener('mousemove',(event)=>{
        gsap.to(cursor.current,{
            x:event.x,
            y:event.y,
            duration:0.5,
            ease:'back.out'
        })
    }) 

     image.current.addEventListener('mouseenter',()=>{
      cursor.current.innerText = "hello";
        gsap.to(cursor.current,{
            scale:2,
        })
    })
     image.current.addEventListener('mouseleave',()=>{
         cursor.current.innerText = "";
        gsap.to(cursor.current,{
            scale:1,
        })
    })
      
    }, [])

   
    



  return (
  <div>
        <div ref={cursor} className='w-10 h-10 bg-white rounded-full fixed top-0 left-0 z-11  '></div>
      <div ref={main} className='h-screen w-full bg-gray-800 flex items-center justify-center'>
            <div ref={image} className='w-100 h-60 object-cover relative '>
                <div className='h-full w-full bg-red-600/50 absolute z-12'></div>
                <img className='h-full w-full'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-KE_MT_-hQyVM7DHVPneFLHh5FLq7qTRvgvarO4M1w&s" alt="" />
            </div>
    </div>
  </div>
  )
}

export default CustomeCursor