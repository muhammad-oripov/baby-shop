import { createAsyncThunk } from "@reduxjs/toolkit";
<<<<<<< HEAD
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",

    async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")

        return data
    }
=======
export const fetchProducts = createAsyncThunk(
     "products/fetchProducts",

     async () => {
          const { data } = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20')

          return data
     }
>>>>>>> otabek0302
)