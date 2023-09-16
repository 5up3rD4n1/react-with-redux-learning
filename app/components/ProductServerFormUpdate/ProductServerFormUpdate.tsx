"use client";

import { useState } from "react";
import { ProductFormUpdateContext } from "@/app/products-by-id/ProductFormUpdateContext";
import { ProductDTO } from "@/lib/clients/dtos/product.dto";
import { useContext, useEffect } from "react";
import client from "@/lib/clients/products.client";
import { v4 as uuid } from "uuid";

export function ProductServerFormUpdate() {
  const { productId, setProductId } = useContext(ProductFormUpdateContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  function handleOnChangeName(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;
    setName(value);
  }
  function handleOnChangePrice(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;
    setPrice(Number(value));
  }

  function handleOnClickSave() {
    async function create() {
      await client.createProduct({
        id: uuid(),
        name,
        price,
        isOpen: false,
      });
      setName("");
      setPrice(0);
    }
    create();
  }
  function handleOnClickCancel() {}

  return (
    <div>
      <form>
        <label>
          {" "}
          Name <b></b>
          <input
            type="text"
            placeholder="name"
            onChange={handleOnChangeName}
          ></input>
        </label>
        <br />
        <label>
          Price <b></b>
          <input
            type="number"
            placeholder="price"
            onChange={handleOnChangePrice}
          ></input>
        </label>
        <br />
      </form>
      <br />
      <button onClick={handleOnClickSave}>Save</button> <b />
      <button onClick={handleOnClickCancel}>Cancel</button>
    </div>
  );
}
