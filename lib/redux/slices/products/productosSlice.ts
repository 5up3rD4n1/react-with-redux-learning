import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsSliceState {
  active: undefined | string;
  items: Product[];
  isFormOpen: boolean;
}

const initialState: ProductsSliceState = {
  active: undefined,
  items: [
    {
      id: "98a66eee-2423-4c32-9411-3499f441a6ca",
      name: "Solo Dani Es Puta",
      price: 12000,
      category: "T-Shirt",
      image:
        "https://ctl.s6img.com/society6/img/oj7Uj6rLPqdTiCP5JPqGwdoTX_A/w_700/tshirts/classic-tshirt/front/black/first/~artwork,bg_FFFFFFFF,fw_3300,fh_5100,iw_3300,ih_5100/s6-original-art-uploads/society6/uploads/misc/ee6a2567bb7f474286ed07ca56b8d22b/~~/sos-una-puta-de-mierda101115-tshirts.jpg?attempt=0",
    },
  ],
  isFormOpen: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    setActiveProduct: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },

    unsetActiveProduct: (state) => {
      state.active = undefined;
    },

    setActiveForm: (state) => {
      state.isFormOpen = true;
    },
    unsetActiveForm: (state) => {
      state.isFormOpen = false;
    },
  },
});

const {
  addProduct,
  setActiveProduct,
  unsetActiveProduct,
  setActiveForm,
  unsetActiveForm,
} = productsSlice.actions;

export {
  addProduct,
  setActiveProduct,
  unsetActiveProduct,
  setActiveForm,
  unsetActiveForm,
};
