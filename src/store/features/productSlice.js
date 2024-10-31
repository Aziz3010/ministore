import { createSlice } from "@reduxjs/toolkit";
import { ProductsNumberBtnValue } from "../../constants";

const productSlice = createSlice({
  name: "product",
  initialState: {
    gridView: 6,
    productsNumber: ProductsNumberBtnValue[0],
    sortType: "desc",
  },
  reducers: {
    changeGridView: (state, actions) => {
      state.gridView = actions.payload;
    },
    changeProductsNumber: (state, actions) => {
      state.productsNumber = actions.payload;
    },
    changeSortType: (state, actions) => {
      state.sortType = actions.payload;
    },
  },
});

export const { changeGridView, changeProductsNumber, changeSortType } = productSlice.actions;
export default productSlice.reducer;
