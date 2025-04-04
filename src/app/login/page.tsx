"use client"

import React from 'react'
import { FaFacebook, FaApple  } from "react-icons/fa";
import { useState } from 'react';

const LoginPage = () => {

  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async(e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto my-14 gap-4 text-gray-700'>

      {/** Title */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular font-semibold text-3xl text-red-500'>{currentState}</p>
        <hr className='border-none h-[2px] w-8 bg-red-800'/>
      </div>

      {/** Input Box  */}
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-red-200' placeholder='Name'/>}
      <input type="email" className='w-full px-3 py-2 border border-red-200' placeholder='Email'/>
      <input type="text" className='w-full px-3 py-2 border border-red-200' placeholder='Password'/>
      {
        currentState === 'Sign Up' 
        ? '' 
        : <div className='w-full flex justify-between items-center  -mt-1'>
            <p className='flex gap-2 text-gray-400 text-md'><input className='w-3' type="checkbox" /> Remember me </p>
            <p className='cursor-pointer text-blue-600 text-sm font-medium'>Forgot your password ? </p>
          </div>
      }
      <button className='w-full px-4 py-2 border bg-red-500 text-white cursor-pointer hover:bg-red-500/80 '>{currentState === 'Login' ? 'Login' : 'Create account'}</button>

      <div className='w-full flex items-center gap-2 mt-1 justify-center'>
        <hr className='h-[1.5px] w-[35%] bg-gray-300 border-none'/>
        <p className='text-gray-400'>{currentState === 'Login' ? 'Sign in with' : 'Sign up with'}</p>
        <hr className='h-[1.5px] w-[35%] bg-gray-300 border-none'/>
      </div>

      {/** Others Method Sign Up / Login  */}
      <div className='flex gap-4 items-center'>
        <div className='border border-gray-300 p-2 rounded-full cursor-pointer'>
          <FaFacebook size={20} color='blue'/>
        </div>
        <div className='border border-gray-300 p-2 rounded-full cursor-pointer'>
          <FaApple size={23} color='black'/>
        </div>
      </div>

      {
        currentState === 'Login'
        ? <p className='text-gray-400'>Don&apos;t have an account ? <span  onClick={()=>setCurrentState('Sign Up')} className='text-blue-600 cursor-pointer'>Sign up</span></p>
        : <p className='text-gray-400'>Already have an account ? <span onClick={()=>setCurrentState('Login')} className='text-blue-600 cursor-pointer'>Login</span></p>
      }
           
           
    </form>
  )
}

export default LoginPage