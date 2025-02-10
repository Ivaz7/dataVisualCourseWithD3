import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataStored: {},
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.dataStored = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
