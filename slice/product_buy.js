import { createSlice } from "@reduxjs/toolkit";

export const productbuySlice = createSlice({
  name: "product_buy",
  initialState: {
    listBuy: null,
  },
  reducers: {
    setproductbuyListBuy: (state, action) => {
      state.listBuy = action.payload;
    }
  },
});

export const { setproductbuyListBuy } = productbuySlice.actions;

export default productbuySlice.reducer;

export const fetchAllproductbuys = (i) => (dispatch) => {
        dispatch(setproductbuyListBuy(i));
};