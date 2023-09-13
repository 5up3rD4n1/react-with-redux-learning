"use client";

import ProductServerForm from "../components/ProductServerForm/ProductServerForm";
import ProductServerList from "../components/ProductServerList/ProductServerList";
import ProductView from "../components/ProductView/ProductView";

export default function Page() {
  return (
    <div>
      <ProductView /> <br />
      <ProductServerForm />
      <br />
      <ProductServerList />
    </div>
  );
}
