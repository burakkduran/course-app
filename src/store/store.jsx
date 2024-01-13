import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import corseReducer from "./slices/courseSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    courses: corseReducer,
  },
});

export default store;
