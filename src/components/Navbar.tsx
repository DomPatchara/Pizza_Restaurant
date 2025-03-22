import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

  const user = false
  return (
    <div className='h-12 md:h-20 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-30'>

      {/**Left Links */}
      <div className='hidden md:flex items-center gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/**Logo */}
      <div className='text-xl font-bold flex-1 md:text-center'>
        <Link href='/'>Massimo</Link>
      </div>

      {/**Right Links */}
      <div className='hidden md:flex gap-4 flex-1 justify-end items-center'>
        <div className='md:absolute top-2 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-2 py-1 rounded-xl'>
          <Image src='/phone.png' alt='' width={20} height={20}/>
          <span>123 456 78</span>
        </div>
        { !user ? (
          <Link href="/login">login</Link>
        ) : (
          <Link href="/orders">Order</Link>
        )}
        <Link href='/cart'><CartIcon/></Link>
      </div>
        
      {/**Mobile Menu*/}
      <div className='block md:hidden'>
        <Menu/>
      </div>

    </div>
  )
}

export default Navbar