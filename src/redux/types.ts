// types.ts
import { store } from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export interface Product {
    id: number;
    name: string;
    size: string;
    total_qty: number;
    total_price: number;
    img: any
  }
