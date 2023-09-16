"use client";
import { useEffect, useRef, useState } from "react";
import client from "@/lib/clients/products.client";
import { ProductDTO } from "@/lib/clients/dtos/product.dto";
import { UpdateProductRequestDTO } from "@/lib/clients/dtos/update-product-request.dto";
import { useContext } from "react";
import { ProductViewContext } from "@/app/products-by-id/ProductViewContext";
export default function ProductServerList() {
  const [products, setProducts] = useState([] as ProductDTO[]);
  const { setProductId } = useContext(ProductViewContext);

  //   const loaded = useRef([]);
  useEffect(() => {
    async function fetch() {
      const serverProducts = await client.getProducts();
      setProducts(serverProducts);
    }
    fetch();
  }, []);

  function handleOnClickView(id: string) {
    setProductId!(id);
  }
  function handleOnClickDelete(id: string) {
    async function deleteProduct(id: string) {
      await client.deleteProduct(id);
      setProductId!(id);
    }
    deleteProduct(id);
  }
  function handleOnClickUpdate(id: string, data: UpdateProductRequestDTO) {
    async function updateProduct(id: string, data: UpdateProductRequestDTO) {
      await client.updateProduct(id, data);
      setProductId!(id);
    }
    updateProduct(id, data);
  }
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          <button onClick={() => handleOnClickView(product.id)}>
            View
          </button>{" "}
          <b />
          <button onClick={() => handleOnClickDelete(product.id)}>
            Delete
          </button>{" "}
          <b />
          <button onClick={() => handleOnClickUpdate(product.id, product)}>
            Update
          </button>
        </div>
      ))}
    </div>
  );
}
