"use client";

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const data = [
    {
        id:1,
        title: "always fresh & always crispy & always hot",
        image: "/slide1.png"
    },
    {
        id:2,
        title: "we delivery your order wherever you are in NY",
        image: "/slide2.png"
    },
    {
        id:3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg"
    },
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>setCurrentSlide(
            (prev) => (prev === data.length - 1 ? 0 : prev + 1)),  // เปลี่ยน text + image ทุกๆ 2 วิ
        2000);
        return () => clearInterval(interval); // when component unmout (navigate ไปหน้าอื่น) ให้ clear fuction เพราะเปลือง memory
    },[data.length])
    
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] md:flex-row'>
        {/**Text Container */}
        <div className='h-1/2 md:w-1/2 md:h-full flex justify-center items-center flex-col'>
            <h1 className='text-5xl text-center uppercase p-4 md:text-5xl xl:text-7xl mb-1 font-bold text-red-500'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-red-500 px-8 py-4 text-white rounded-2xl text-base md:text-lg shadow-xl hover:bg-red-600 hover:shadow-2xl cursor-pointer font-bold'>
                Order Now
            </button>
        </div>

        {/**Image Container */}
        <div className='h-1/2 w-full relative md:w-1/2 md:h-full'>
            <Image src={data[currentSlide].image} alt='' fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider