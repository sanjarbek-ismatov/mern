import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { createLogger } from "redux-logger";
type initialStateType = {
  username: string;
  mail: string;
  password: string;
};
const initialState: initialStateType = {
  username: "",
  mail: "",
  password: "",
};
export const thunk = createAsyncThunk("user/fetch", () => {
  const { username, mail, password } = JSON.parse(
    localStorage.getItem("user") || ""
  );

  return axios
    .get(
      `http://localhost:4000/api?username=${username}&mail=${mail}&password=${password}`
    )
    .then((data) => data)
    .catch((error) => error);
});
const getUserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunk.fulfilled, (state, action) => {
      (state.mail = action.payload.mail),
        (state.username = action.payload.username),
        (state.password = action.payload.password);
    });
  },
});
export const store = configureStore({
  reducer: {
    getUser: getUserSlice.reducer,
  },
  middleware: (def) => def().concat(createLogger()),
});
