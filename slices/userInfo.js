import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userInfoSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return { user: action.payload };
    },

    resetUserInfo: (state) => {
      return { ...state.user, user: {} };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, resetUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
