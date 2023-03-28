import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./middleWares/auth";
import statusReducer from "./slices/status";
import  navSliceReducer  from "./slices/nav";
import { mainApi } from "./middleWares/mainApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mainApi.reducerPath]: mainApi.reducer,
    status: statusReducer,
    navSlice: navSliceReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat([authApi.middleware],
      [mainApi.middleware],),
});
