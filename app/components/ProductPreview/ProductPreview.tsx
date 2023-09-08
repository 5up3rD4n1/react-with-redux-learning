"use client";
import { activeProductSelector, unsetActiveProduct } from "@/lib/redux";
import { useSelector, useDispatch } from "react-redux";

export function ProductPreview() {
  const product = useSelector(activeProductSelector);
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  function handleOnClick() {
    dispatch(unsetActiveProduct());
  }

  return (
    <div>
      <div>
        <button onClick={handleOnClick}>X</button>
      </div>
      <img src={product.image}></img>
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
      <div>Category: {product.category}</div>
    </div>
  );
}
