/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserSliceState {
  name: string;
  age: number;
  email: string;
}

const initialState: UserSliceState = {
  age: 0,
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

const { setName, setEmail, setAge } = userSlice.actions;

export { setName, setEmail, setAge };
