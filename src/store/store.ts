import {
  combineReducers,
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from "@reduxjs/toolkit";
import userReducer from "./reducers/usersSlice";
import { postsAPI } from "../services/postsService";

const rootReducer = combineReducers({
  users: userReducer,
  [postsAPI.reducerPath]: postsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsAPI.middleware),
  });
};

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
