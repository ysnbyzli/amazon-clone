import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;
      const isThere = state.items.find(item => item.product.id == product.id);
      if (isThere) {
        state.items = state.items.map(item => item.product.id == product.id ? { product, count: item.count + 1 } : item)
      } else {
        state.items.push({ product: product, count: 1 })
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.product.id !== action.payload)
    },
    changeCountToProduct: (state, action) => {
      const { id, value } = action.payload;
      const item = state.items.find(item => item.product.id == id)
      if (item) {
        state.items = state.items.map(item => item.product.id === id ? { product: item.product, count: value } : item)
      }
    }
  },
});

export const { addToBasket, removeFromBasket, changeCountToProduct } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
