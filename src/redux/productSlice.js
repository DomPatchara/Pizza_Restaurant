import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    products: [],
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
           const { name, size, total_qty, total_price, img } = action.payload;

           // Last ID 
           const lastId = state.products.length > 0 ? state.products[state.products.length - 1].id : 0;

           // ดูว่ามีสินค้าอยู่แล้วหรือยัง
           const existingProduct = state.products.find(product => product.name === name && product.size === size)


           if (existingProduct) {
            // Update qty & price 
            existingProduct.total_qty += total_qty;
            existingProduct.total_price += total_price;
           } else {
            // Add new product
            state.products.push({
                id: lastId + 1,
                name,
                size,
                total_qty,
                total_price,
                img,
            });
           }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            )            
        }
    }
})

export const {addProduct, removeProduct} = productSlice.actions;
export default productSlice.reducer;