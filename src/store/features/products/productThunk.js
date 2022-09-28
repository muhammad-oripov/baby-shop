import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",

    async () => {
        const {data} = await axios.get("http://localhost:3500/employees")

        return data
    }
)