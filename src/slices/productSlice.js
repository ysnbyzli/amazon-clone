import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductList = createAsyncThunk("product/fetchAll", async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})


const initialState = {
    items: [],
    searchItems: [],
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        search: (state, action) => {
            if (action.payload.length > 2) {
                state.searchItems = state.items.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            } else {
                state.searchItems = []
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductList.fulfilled, (state, action) => {
                state.items = action.payload;
            })
    }
})

export const { search } = productSlice.actions;

export const selectProducts = (state) => state.products.items;

export default productSlice.reducer;