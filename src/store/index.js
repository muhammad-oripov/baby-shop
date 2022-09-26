<<<<<<< HEAD
import {configureStore} from '@reduxjs/toolkit'
import likedSlice from './features/likedSlice'
import productSlice from './features/products/productSlice'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, likedSlice)  

export const store =  configureStore({
    reducer: {
        products: productSlice,
        liked: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
})

export const persistor = persistStore(store)
=======
import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './features/products/productSlice'

export default configureStore({
     reducer: {
          products: productSlice
     }
})
>>>>>>> otabek0302
