import { combineReducers } from "redux";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
});

export default rootReducer;
