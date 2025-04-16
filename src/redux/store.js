import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"

export const store = configureStore({
    reducer: {
        products: productReducer,
    }
})

export const RootState = store.getState;
export const AppDispatch = store.dispatch;