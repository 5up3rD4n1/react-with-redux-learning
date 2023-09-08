"use  client";

import { ProductList } from "../components/ProductList/ProductList";
import { ProductPreview } from "../components/ProductPreview/ProductPreview";
import { ProductForm } from "../components/ProductForm/ProductForm";
import { ProductAdd } from "../components/ProductAdd/ProductAdd";

export default function Page() {
  return (
    <div>
      <ProductAdd />
      <ProductForm />
      <ProductPreview />
      <ProductList />
    </div>
  );
}
