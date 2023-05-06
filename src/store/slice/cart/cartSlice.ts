import { CartInitialInterface } from "@/store/slice/cart/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartInitialInterface = {
  product: "",
  quantity: 1,
};

export const cartSlice = createSlice({
  initialState: initialState,
  name: "cart",
  reducers: {
    resetState: () => initialState,
  },
});

export const { resetState } = cartSlice.actions;

export default cartSlice.reducer;
