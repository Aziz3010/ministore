import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      state.products.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      state.productsNumber = actions.payload;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
