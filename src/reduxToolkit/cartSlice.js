import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex((item) => item._id === action.payload._id);
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload, quantity: action.payload.quantity });
      };
    },
    removeProduct: (state, action) => {
      return state.products.filter((item) => item._id !== action.payload._id);
    },
    removeAllProduct: (state, _) => {
      return { ...state, products: [] };
    },
  },
});

export const { addProduct, removeProduct, removeAllProduct } = cartSlice.actions;
export default cartSlice.reducer;
