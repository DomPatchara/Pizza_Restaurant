"use client"

import React, { useEffect } from 'react'
import { useState } from 'react' 

type Props = {
    price: number | undefined
    id: number | undefined
    options?: { title:string; additionalPrice: number }[];
}

const Price = ({price, options}: Props) => {

    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0);

    useEffect(()=>{
        setTotal((quantity * (options ? (price ?? 0) + options[selected].additionalPrice : (price ?? 0))))
    },[quantity, selected, options, price])




  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total?.toFixed(2)}</h2>

        {/**Option Container */}
        <div className='flex gap-4'>
            {options?.map((option, index)=> (
                <button 
                    key={index}
                    className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md cursor-pointer'
                    style={{
                        background: selected === index ? "rgb(248 113 113)" : "white",
                        color: selected === index ? "white" : "red"
                    }}
                    onClick={()=>setSelected(index)}
                >
                    {option.title}
                </button>
            ))}
        </div>

        {/**QTY Container */}
        <div className='flex justify-between items-center'>
            <div className='flex-1 flex items-center justify-between p-2 ring-1 ring-red-500'>
                <span>Quantity</span>
                <div className='space-x-1.5'>
                    <button className='cursor-pointer' onClick={()=>setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
                    <span>{quantity}</span>
                    <button className='cursor-pointer' onClick={()=> setQuantity(prev =>(prev < 9 ? prev + 1 : 9))}>{'>'}</button>
                </div>
            </div>
            {/**Cart Button */}
            <button 
                className='p-2 bg-red-500 text-white uppercase ring-1 ring-red-500 hover:bg-red-600 cursor-pointer'
            >
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default Price