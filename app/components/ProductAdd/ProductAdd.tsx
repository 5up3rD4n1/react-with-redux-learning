"use client";
import { setActiveForm } from "@/lib/redux";
import { useDispatch } from "react-redux";

export function ProductAdd() {
  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(setActiveForm());
  }

  return (
    <div>
      <button onClick={handleOnClick}>Add Product</button>
    </div>
  );
}
