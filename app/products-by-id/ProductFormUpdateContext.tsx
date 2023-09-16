"use client";
import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";
export const ProductFormUpdateContext = createContext<{
  productId?: string;
  setProductId?: Dispatch<SetStateAction<undefined | string>>;
}>({
  productId: undefined,
  setProductId: undefined,
});
