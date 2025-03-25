"use client"

import { createContext, ReactNode } from "react";
import { useState } from "react";

type CartProduct = {
    name: string;
    size: string;
    quantity: number;
    totalPrice: number;
}

type MyContextType = {
    cartProducts: Record<string, CartProduct>;
    setCartProducts: (product: Record<string, CartProduct>) => void;
}

export const PizzaContext = createContext<MyContextType | undefined>(undefined);


const PizzaContextProvider = ({ children } : { children : ReactNode }) => {

    const [cartProducts, setCartProducts] = useState<Record<string, CartProduct>>({});

    // Create add to cart function --> setCartProduct

    const value = {
        cartProducts,setCartProducts
    }

    return (
        <PizzaContext.Provider value={value}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaContextProvider