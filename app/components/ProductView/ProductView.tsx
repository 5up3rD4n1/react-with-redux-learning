"use client";
import client from "@/lib/clients/products.client";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductDTO } from "@/lib/clients/dtos/product.dto";
import { ProductViewContext } from "@/app/products-by-id/ProductViewContext";

export default function ProductView() {
  const { productId, setProductId } = useContext(ProductViewContext);
  const [product, setProduct] = useState<ProductDTO | undefined>(undefined);

  useEffect(() => {
    async function fetch(id: string) {
      const serverProduct = await client.getProduct(id);
      setProduct(serverProduct);
    }
    if (productId !== undefined) {
      fetch(productId);
    }
  }, [productId]);

  if (productId === undefined || setProductId === undefined) {
    return null;
  }

  function handleOnClickClose() {
    if (setProductId !== undefined) {
      setProduct(undefined);
      setProductId(undefined);
    }
  }

  return (
    <div>
      <button onClick={handleOnClickClose}>X</button> <br />
      {product && (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDvF8l753KHOWjwCmjEO1PfxYe5J95T54IA&usqp=CAU"></img>
      )}
      <div>Name: {product?.name}</div>
      <div>Price: {product?.price}</div>
    </div>
  );
}
