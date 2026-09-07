import {
  combineReducers,
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from "@reduxjs/toolkit";
import userReducer from "./reducers/usersSlice";

const rootReducer = combineReducers({
  users: userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore["dispatch"];
export type AppDispatch = ThunkDispatch<AppState, unknown, UnknownAction>;
