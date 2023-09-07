/* Instruments */
import { counterSlice, userSlice } from "./slices";
import { productsSlice } from "./slices/products";

export const reducer = {
  counter: counterSlice.reducer,
  user: userSlice.reducer,
  products: productsSlice.reducer,
};
