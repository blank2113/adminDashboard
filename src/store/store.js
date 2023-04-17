import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./middleWares/auth";
import statusReducer from "./slices/status";
import navSliceReducer from "./slices/nav";
import { mainApi } from "./middleWares/mainApi";
import { citiesApi } from "./middleWares/citiesApi";
import { hotelsApi } from "./middleWares/hotelsApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [mainApi.reducerPath]: mainApi.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
    status: statusReducer,
    navSlice: navSliceReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(
      [authApi.middleware],
      [mainApi.middleware],
      [citiesApi.middleware],
      [hotelsApi.middleware],
    ),
});
