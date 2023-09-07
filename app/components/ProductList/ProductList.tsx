"use client";

import { useSelector, useDispatch } from "react-redux";
import { productsItemsSelector, setActiveProduct } from "@/lib/redux";

export function ProductList() {
  const products = useSelector(productsItemsSelector);

  const dispatch = useDispatch();

  function handleOnClick(id: string) {
    dispatch(setActiveProduct(id));
  }

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              Name: {product.name}
              Price: {product.price} <b></b>
              <button onClick={() => handleOnClick(product.id)}>View</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
