import { createSlice, nanoid } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    searchTerm: "",
    data: [
      {
        id: nanoid(),
        name: "React",
        description: "A JavaScript library for building user interfaces",
        cost: 50,
      },
      {
        id: nanoid(),
        name: "Vue",
        description:
          "The Progressive JavaScript Framework. Versatile. Performant",
        cost: 25,
      },
      {
        id: nanoid(),
        name: "Angular",
        description: "One framework. Mobile & desktop. Feature-complete. ",
        cost: 75,
      },

    ],
  },
  reducers: {
    addCourse: (state, action) => {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
      });
    },

    deleteCourse: (state, action) => {
      state.data = state.data.filter((course) => course.id !== action.payload);
    },

    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export default courseSlice.reducer;
export const { addCourse, deleteCourse, changeSearchTerm } =
  courseSlice.actions;
