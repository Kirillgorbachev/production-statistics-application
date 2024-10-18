import { createSlice } from "@reduxjs/toolkit";
import {decodeToken} from "react-jwt";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    userRole: [],
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      const decoded = decodeToken(state.token);
      state.userId = decoded.sub;
      state.userRole = decoded.roleIds || [];
      state.isLoggedIn = true;
    },
    setIsLoggedIn: (state, action) =>{
      state.isLoggedIn = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
      state.userRole = [];
      state.isLoggedIn = false;
    }
  },
});

export const {setToken,setIsLoggedIn, logout } = authSlice.actions;
export const userId = (state) => state.auth.userId;
export const token = (state) => state.auth.token;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const userRole = (state) => state.auth.userRole;

export default authSlice;