import React from 'react'
import Image from 'next/image'

const Slider = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] md:flex-row'>
        {/**Text Container */}
        <div className='h-1/2 md:w-1/2 md:h-full flex justify-center items-center flex-col'>
            <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl mb-1 font-bold text-gray-800'>
                Test
            </h1>
            <p className='text-gray-600 text-center text-lg md:text-xl mb-3 px-5'>
                Savor the taste of handcrafted pizzas made with the finest 
                ingredients, baked to perfection. Order now for dine-in,
                 takeaway, or delivery!
            </p>
            <button className='bg-red-500 px-8 py-4 text-white rounded-2xl text-base md:text-lg shadow-xl hover:bg-red-600 hover:shadow-2xl cursor-pointer font-bold'>
                Order Now
            </button>
        </div>

        {/**Image Container */}
        <div className='h-1/2 w-full relative md:w-1/2 md:h-full'>
            <Image src='/slide1.png' alt='' fill className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider