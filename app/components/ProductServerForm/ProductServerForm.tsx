"use client";

import client from "@/lib/clients/products.client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function ProductServerForm() {
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
      });
      setName("");
      setPrice(0);
    }
    create();
  }

  return (
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={handleOnChangeName}></input>
      <label>Price</label>
      <input type="text" value={price} onChange={handleOnChangePrice}></input>
      <button onClick={handleOnClickSave}>Save</button>
    </div>
  );
}
