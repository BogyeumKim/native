import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isAuthenticated: false,
  },
  reducers: {
    authenticateLogin: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      AsyncStorage.setItem("token", action.payload);
    },
    logout: (state, action) => {
      state.token = "";
      state.isAuthenticated = false;
      AsyncStorage.removeItem("token");
    },
  },
});

export const { authenticateLogin, logout } = authSlice.actions;
export default authSlice.reducer;
