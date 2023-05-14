import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark",
  activeMenu: false,
  currentColor: "#03C9D7",
  themeset: false,
  screenSize: undefined,
  userId: "63701cc1f03239c72c000180",
  user: null,
  Products: null,
  customers: null,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setMenu: (state) => {
      state.activeMenu = !state.activeMenu;
    },
    setTheme: (state) => {
      state.themeset = !state.themeset;
    },
    setColor: (state, action) => {
      state.currentColor = action.payload;
      state.themeset = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setData: (state, action) => {
      state.Products = action.payload;
    },
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    setScreenSize: (state, action) => {
      state.screenSize = action.payload;
    },
  },
});
export const {
  setMode,
  setData,
  setMenu,
  setColor,
  setTheme,
  setScreenSize,
  setUser,
  setCustomers,
} = globalSlice.actions;
export default globalSlice.reducer;
