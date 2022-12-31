import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import syncManagerReducer from "./slices/syncManagerSlice";

export const store = configureStore({
    reducer: {
      app: appReducer,
      syncManager: syncManagerReducer
    },
});
  
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

