import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      product: {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: 'men\'s clothing',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rate: 3.9,
        hasPrime: true
      },
      count: 1
    }
  ],
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
