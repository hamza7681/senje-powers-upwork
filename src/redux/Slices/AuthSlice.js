import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: {},
  },
  reducers: {},
});

export default AuthSlice.reducer;
