import React from 'react'
import { menu } from '@/data'
import Link from 'next/link' 

const MenuPage = () => {
  return (
    <div className='lg:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex flex-col md:flex-row items-center'>
      { menu.map((category)=> (
        <Link 
          key={category.id} 
          href={`/menu/${category.slug}`} 
          className='w-full h-1/3 bg-cover p-8 md:h-1/2' 
          style={{backgroundImage: `url(${category.img})`}}
        >
          {/** Each Category */}
          <div className={`text-${category.color} w-1/2`}>
            <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-8'>{category.desc}</p>
            <button 
              className={`hidden 2xl:block text-${category.color === 'black' ? 'white' : 'red-500'} py-2 px-4 rounded-md cursor-pointer hover:scale-105 transition-all duration-500`}
              style={{backgroundColor: `${category.color}`}}
            >
              Explore
            </button>
          </div>
          
        </Link>
      ))}
    </div>
  )
}

export default MenuPage