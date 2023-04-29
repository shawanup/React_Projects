import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "Theme",
  initialState: { theme: "dark" },
  reducers: {
    toggle(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("toggle", state.theme);
    },
  },
});

export const themeAction = themeSlice.actions;

export default themeSlice.reducer;
