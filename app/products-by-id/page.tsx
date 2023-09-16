"use client";

import ProductServerForm from "../components/ProductServerForm/ProductServerForm";
import ProductServerList from "../components/ProductServerList/ProductServerList";
import ProductView from "../components/ProductView/ProductView";
import { ProductServerFormUpdate } from "../components/ProductServerFormUpdate/ProductServerFormUpdate";
import { ProductViewContext } from "./ProductViewContext";
import { useState } from "react";

export default function Page() {
  const [productId, setProductId] = useState<string | undefined>(undefined);
  return (
    <div>
      <ProductViewContext.Provider value={{ productId, setProductId }}>
        <ProductServerFormUpdate />
        <ProductView /> <br />
        <ProductServerForm />
        <br />
        <ProductServerList />
      </ProductViewContext.Provider>
    </div>
  );
}
