import { configureStore } from "@reduxjs/toolkit";
import schoolsSlice from "./slices/schoolsSlice";

export const store = configureStore({
  reducer: {
    schools: schoolsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
