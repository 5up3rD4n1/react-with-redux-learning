"use client";

import { useDispatch, useSelector } from "react-redux";
import { setName, setAge, setEmail, userSelector } from "@/lib/redux";

export function User() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  function handleOnNameChange(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;

    dispatch(setName(value));
  }

  function handleOnAgeChange(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;

    dispatch(setAge(Number(value)));
  }

  function handleOnEmailChange(input: React.ChangeEvent<HTMLInputElement>) {
    const { value } = input.target;

    dispatch(setEmail(value));
  }

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" value={user.name} onChange={handleOnNameChange} />
      </div>
      <div>
        <label>Age</label>
        <input type="number" value={user.age} onChange={handleOnAgeChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={user.email} onChange={handleOnEmailChange} />
      </div>
    </div>
  );
}
