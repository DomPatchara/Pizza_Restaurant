"use client"

import React from 'react'
import Image from 'next/image'

import { useSelector } from 'react-redux'
import { RootState } from "../redux/types"
import { Product } from "../redux/types";

const CartIcon = () => {

  const products = useSelector((state: RootState) => state.products.products) as Product[];


  const numcount = products.length

  return (
    <div className=' relative flex items-center gap-4'>
        <div className='relative w-8 h-8'>
            <Image src='/cart.png' alt='' fill sizes="(max-width: 768px) 2rem, 3rem" />
        </div>
        <span className='absolute bottom-[-5px] right-[-5px] w-4 h-4 leading-4  text-[9px] text-center  bg-red-500 text-white rounded-full font-semibold'>{numcount}</span>
    </div>
  )
}

export default CartIcon