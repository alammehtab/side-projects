import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get user stored in localStorage, parse it cz localStorage stores only strings
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  // has to be this
  initialState,
  // has to be this
  reducers: {
    // this name reset could be anything
    // here is state is representing initialState in the first run
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  // has to be this
  extraReducers: () => {},
});

// we're accessing authSlice.reducers.reset but it has to be authSlice.actions
// reducers is named actions by redux-toolkit
export const { reset } = authSlice.actions;
export default authSlice.reducer;
