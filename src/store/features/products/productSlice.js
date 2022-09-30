import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";
import { Swiper_arr4 } from "../../../Components/swiper/Swiper_compo/Swip_arr";

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [...Swiper_arr4],
        liked: [],
        bucked: [],
        sales: [],
        status: 'idle'
    },
    reducers: {
        likeproduct(state, action) {
            state.liked.push(action.payload)
        },
        toBucket(state, action) {
            state.bucked.push(action.payload)
        },
        fetchAllSales(state) {
            state.sales = state.data.filter(item => item.discount.isSale)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success"
                state.data = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "error"
            })
    }
})

export const {likeproduct, fetchAllSales} = productSlice.actions
export default productSlice.reducer 
