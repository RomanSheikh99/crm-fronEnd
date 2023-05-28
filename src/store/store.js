import { createSlice, configureStore, } from "@reduxjs/toolkit";
import reducers from "./reducers/reducers";
import State from "./state/state";

const Slice = createSlice({
  name: "vite",
  initialState: State,
  reducers: reducers,
});

export const action = Slice.actions;

export const store = configureStore({
  reducer: Slice.reducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
