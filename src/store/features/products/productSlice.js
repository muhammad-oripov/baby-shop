import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";

export const productSlice = createSlice({
     name: 'products',
     initialState: {
          data: [],
          status: 'idle'
     },
     reducers: {},
     extraReducers (builder) {
          builder
               .addCase(fetchProducts.pending, (state, action) => {
                    state.status = "loading"
               })
               .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.status = "success"
                    console.log(action.payload)
               })
               .addCase(fetchProducts.rejected, (state, action) => {
                    state.status = "error"
               })
     }

})

export default productSlice.reducer