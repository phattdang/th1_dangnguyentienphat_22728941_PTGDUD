import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setResult } = resultSlice.actions;
export default resultSlice.reducer;
