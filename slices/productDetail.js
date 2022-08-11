import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

export const ProductDetail = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return { product: action.payload };
    },
    resetProduct: (state) => {
      return { ...state.product, product: {} };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct, resetProduct } = ProductDetail.actions;

export default ProductDetail.reducer;
