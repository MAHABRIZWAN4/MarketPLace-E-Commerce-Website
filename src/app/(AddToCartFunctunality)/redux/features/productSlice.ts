"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { productType } from '@/app/utils/dataTypes'
import { products } from '@/app/utils/mock';


// Define the initial state using that type
const initialState:productType[] = products;

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    

  },
})

export const {  } = productSlice.actions

export default productSlice.reducer


