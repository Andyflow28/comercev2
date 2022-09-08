import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    listProduct: [],
  },
  reducers: {
    setProductsList: (state, action) => {
      state.listProduct = action.payload;
    }
  },
});

export const { setProductList } = productSlice.actions;

export default productSlice.reducer;

export const fetchAllProducts = () => (dispatch) => {
  axios
    .get("/api/auth/connect/user")
    .then((response) => {
        dispatch(setProductList(response.data.data));
      })
      .catch((error) => console.log(error));
};