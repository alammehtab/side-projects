import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// get user stored in localStorage, parse it cz localStorage stores only strings
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

// we're accessing authSlice.reducers.reset but it has to be authSlice.actions
// reducers is named actions by redux-toolkit
export const { reset } = authSlice.actions;
export default authSlice.reducer;
