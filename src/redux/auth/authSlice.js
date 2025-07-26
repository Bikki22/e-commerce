import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => initialState,
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload ?? "something went wrong";
        state.loading = false;
      }),
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
