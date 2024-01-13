import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeDescription: (state, action) => {
      state.description = action.payload;
    },
    changeCost: (state, action) => {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase("courses/addCourse", (state) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});

export default formSlice.reducer;

export const { changeName, changeDescription, changeCost } = formSlice.actions;
