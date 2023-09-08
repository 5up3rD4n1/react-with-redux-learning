"use client";
import {
  isFormOpenSelector,
  unsetActiveForm,
  addProduct,
  setActiveProduct,
} from "@/lib/redux";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function ProductForm() {
  const isOpen = useSelector(isFormOpenSelector);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
  });

  function handleOnChangeName(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;
    setData({ ...data, name: value });
  }
  function handleOnChangePrice(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;
    setData({ ...data, price: Number(value) });
  }

  function handleOnChangeCategory(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;
    setData({ ...data, category: value });
  }

  function handleOnChangeImage(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;
    setData({ ...data, image: value });
  }

  //   function handleOnChange(
  //     property: "name" | "price" | "category" | "image",
  //     input: React.ChangeEvent<HTMLInputElement>
  //   ) {
  //     const { value } = input.target;

  //     setData({ [property]: value, ...data });
  //   }

  function handleOnClickSave() {
    const id = uuid();
    // save form info
    dispatch(addProduct({ id, ...data }));

    dispatch(unsetActiveForm());
    dispatch(setActiveProduct(id));
  }
  if (!isOpen) {
    return null;
  }
  function handleOnClickCancel() {
    dispatch(unsetActiveForm());
  }

  return (
    <div>
      <form>
        <label>
          {" "}
          Name <b></b>
          <input
            type="text"
            placeholder="name"
            // onChange={(e) => handleOnChange("name", e)}
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
        <label>
          Category <b></b>
          <input
            type="text"
            placeholder="product category"
            onChange={handleOnChangeCategory}
          ></input>
        </label>
        <label>
          Image <b></b>
          <input
            type="text"
            placeholder="paste url"
            onChange={handleOnChangeImage}
          ></input>
        </label>
      </form>
      <br />
      <button onClick={handleOnClickSave}>Save</button> <b />
      <button onClick={handleOnClickCancel}>Cancel</button>
    </div>
  );
}
