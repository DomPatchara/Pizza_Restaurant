"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";
import { Product } from "../../redux/types";
import { useDispatch } from "react-redux";
import { removeProduct } from "@/redux/productSlice";

const CartPage = () => {

  const dispatch = useDispatch();

  const Items = useSelector(
    (state: RootState) => state.products.products
  ) as Product[];

  const handleRemove = (id:number) => {
    dispatch(removeProduct(id))
  }

  return (
    <div className="h-screen md:h-[calc(100vh-8rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 px-4 flex flex-col justify-start overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 hide-scrollbar">
      <div className="mt-20 lg:mt-5">
          {Items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4  p-2">
              <Image src={item.img} alt="" width={100} height={100} />
              <div className="flex flex-col items-center">
                <h1 className="max-w-[190px] uppercase text-center text-xl font-bold">{item.name}</h1>
                <span>
                  {item.size} ({item.total_qty} {item.total_qty === 1 ? "piece" : "pieces" })
                </span>
              </div>
              <h2 className="font-bold">${item.total_price.toFixed(2)}</h2>
              <button
                onClick={()=> handleRemove(item.id)}
                className="cursor-pointer"
              >
                  X
              </button>
            </div>
          ))}
      </div>
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({Items.length} items)</span>
          <span className="">$ {Items.reduce((total, item) => total + item.total_price, 0).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$ {Items.reduce((total, item) => total + item.total_price, 0).toFixed(2)}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
