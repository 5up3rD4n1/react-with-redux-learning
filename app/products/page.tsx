"use  client";

import { ProductList } from "../components/ProductList/ProductList";
import { ProductPreview } from "../components/ProductPreview.ts/ProductPreview";

export default function Page() {
  return (
    <div>
      <ProductPreview />
      <ProductList />
    </div>
  );
}
