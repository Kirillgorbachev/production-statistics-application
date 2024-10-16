import { createSlice } from "@reduxjs/toolkit";
import {decodeToken} from "react-jwt";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.userId = decodeToken(state.token).sub;
      state.isLoggedIn = true;
    },
    setIsLoggedIn: (state, action) =>{
      state.isLoggedIn = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
    }
  },
});

export const {setToken,setIsLoggedIn, logout } = authSlice.actions;
export const userId = (state) => state.auth.userId;
export const token = (state) => state.auth.token;
export const isLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice;