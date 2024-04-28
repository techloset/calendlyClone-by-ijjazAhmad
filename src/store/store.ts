import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./slices/timeSlice";
import auth from "./slices/auth";
import availability from "./slices/availability";

const store = configureStore({
  reducer: {
    auth:auth,
    availability:availability,
    time: timeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
