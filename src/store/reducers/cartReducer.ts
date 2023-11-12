import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Products";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    removeProductToCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    incrementProductQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product) {
        state.cart.push({ ...product });
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductToCart,
  incrementProductQuantity,
  decrementProductQuantity,
} = sliceCart.actions;

export default sliceCart.reducer;
