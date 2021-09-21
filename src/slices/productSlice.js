import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductList = createAsyncThunk("product/fetchAll", async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})


const initialState = {
    items: [],
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductList.fulfilled, (state, action) => {
                state.items = action.payload;
            })
    }
})

export const selectProducts = (state) => state.products.items;

export default productSlice.reducer;