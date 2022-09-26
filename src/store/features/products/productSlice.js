import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";

<<<<<<< HEAD

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        liked: [],
        status: 'idle'
    },
    reducers: {
        likeproduct(state, action) {
            state.liked.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success"
                state.data = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "error"
            })
    }
})

export const {likeproduct} = productSlice.actions
export default productSlice.reducer 
=======
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
>>>>>>> otabek0302
