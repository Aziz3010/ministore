import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItemsState: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cartItemsState.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItemsState[itemIndex].quantity += action.payload.quantity;
        toast.success("Increased one");
      } else {
        state.cartItemsState.push({ ...action.payload });
        toast.success("Item added");
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItemsState.find(
        (item) => item.id === action.payload
      );
      if (item) item.quantity += 1;
      toast.success("Increased one");
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItemsState.find(
        (item) => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        toast.success("Decreased one");
      } else {
        state.cartItemsState = state.cartItemsState.filter(
          (item) => item.id !== action.payload
        );
        toast.success("Item removed");
      }
    },
  },
});

export const selectTotalPrice = (state) => {
  return state.cart.cartItemsState
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
};

export const selectTotalQuantity = (state) => {
  return state.cart.cartItemsState.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

export const { addItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
