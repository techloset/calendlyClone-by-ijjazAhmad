import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./slices/timeSlice";
import auth from "./slices/auth";

const store = configureStore({
  reducer: {
    auth:auth,
    time: timeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
