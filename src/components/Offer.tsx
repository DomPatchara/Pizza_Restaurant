import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black h-screen md:h-[70vh] flex flex-col md:flex-row md:bg-[url("/offerBg.png")]'>

      {/**Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 lg:px-10">
        <h1 className='text-5xl xl:text-6xl text-white font-bold'>Dilicious Burger & French Fry</h1>
        <p className='text-white xl:text-xl'>
          Progressively simplify effective e-toiler and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown/>
        <button className='text-white px-6 py-3 bg-red-500 rounded-2xl hover:bg-red-600 cursor-pointer'>Order Now</button>
      </div>
      
      {/**Image Container */}
      <div className='relative flex-1 w-full'>
        <Image src="/offerProduct.png" alt='' fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer