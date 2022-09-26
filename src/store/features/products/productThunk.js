import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
     "products/fetchProducts",

     async () => {
          const { data } = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20')

          return data
     }
)