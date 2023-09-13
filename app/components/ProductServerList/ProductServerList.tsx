"use client";
import { useEffect, useRef, useState } from "react";
import client from "@/lib/clients/products.client";
import { ProductDTO } from "@/lib/clients/dtos/product.dto";
export default function ProductServerList() {
  const [products, setProducts] = useState([] as ProductDTO[]);
  //   const loaded = useRef([]);
  useEffect(() => {
    async function fetch() {
      const serverProducts = await client.getProducts();
      setProducts(serverProducts);
    }
    fetch();
  }, []);

  function handleOnClickView() {}
  function handleOnClickDelete() {}
  function handleOnClickUpdate() {}
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          <button onClick={handleOnClickView}>View</button> <b />
          <button onClick={handleOnClickDelete}>Delete</button> <b />
          <button onClick={handleOnClickUpdate}>Update</button>
        </div>
      ))}
    </div>
  );
}
