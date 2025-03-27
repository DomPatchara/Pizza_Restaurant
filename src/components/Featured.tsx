import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'
import Link from 'next/link'

const Featured = () => {

  return (
    <div className='w-screen overflow-x-scroll text-red-500 hide-scrollbar'>
      {/**Wrapper */}
      <div className='w-max flex '>

        {/** Single Item */}
        { featuredProducts.map((item)=> {
          return (
          <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 md:w-[50vw] lg:w-[33vw] lg:h-[90vh] hover:bg-fuchsia-50 transition-all duration-300'>
            
                {/**Image container */}
                { item.img && 
                  <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                    <Image src={item.img} alt='' fill className='object-contain'/>
                  </div>
                }

                {/**Text container */}
                <div className='flex-1 flex flex-col gap-4 items-center text-center justify-center p-2'>
                  <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                  { item.desc && <p className='px-4 2xl:p-8'>{item.desc}</p> }
                  <span className='text-xl font-bold'>{item.price}</span>
                  <Link href={`/product/${item.category}/${item.id}`} >
                    <button className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600'>Add to Cart</button>
                  </Link>
                </div>
              </div>
            
          )})}

      </div>
    </div>
  )
}

export default Featured