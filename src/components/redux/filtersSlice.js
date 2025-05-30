import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      // return {
      //   ...state,
      //   name: action.payload,
      // };

      state.name = action.payload;
    },
  },
});

// Експортуємо фабрики екшенів
export const { setFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
