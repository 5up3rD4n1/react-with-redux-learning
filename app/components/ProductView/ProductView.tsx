"use client";

import client from "@/lib/clients/products.client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function ProductView() {
  function handleOnClickClose() {}
  return (
    <div>
      <div>
        <button onClick={handleOnClickClose}>X</button>
      </div>
      <img src="https://cdn-sales.optimonk.com/wp-content/uploads/shopping-cart-page-09.png"></img>
      <div>Name:</div>
      <div>Price:</div>
    </div>
  );
}
