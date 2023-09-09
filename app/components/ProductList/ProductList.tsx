"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  productsItemsSelector,
  setActiveProduct,
  deleteProductItem,
} from "@/lib/redux";
import { v4 as uuid } from "uuid";

export function ProductList() {
  const products = useSelector(productsItemsSelector);
  const dispatch = useDispatch();

  function handleOnClick(id: string) {
    dispatch(setActiveProduct(id));
  }

  function handleOnClickDelete(id: string) {
    dispatch(deleteProductItem(id));
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              Name: {product.name}
              Price: {product.price} <b></b>
              <button onClick={() => handleOnClick(product.id)}>
                View
              </button>{" "}
              <b></b>
              <button onClick={() => handleOnClickDelete(product.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
