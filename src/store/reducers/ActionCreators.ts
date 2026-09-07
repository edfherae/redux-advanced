import axios from "axios";
import type { AppDispatch } from "../store";
import type { User } from "../../models/User";
import { usersSlice } from "./usersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(usersSlice.actions.usersFetching());
//     const response = await axios.get<User[]>(
//       "https://jsonplaceholder.typicode.com/users",
//     );
//     dispatch(usersSlice.actions.usersFetchingSuccess({ users: response.data }));
//   } catch (e) {
//     if (e instanceof Error)
//       dispatch(usersSlice.actions.usersFetchingError({ errorText: e.message }));
//   }
// };

export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("users/fetchAll", async (_, ThunkAPI) => {
  try {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users",
    );
    return response.data;
  } catch (e) {
    const message = e instanceof Error ? e.message : "Неизвестная ошибка";
    return ThunkAPI.rejectWithValue(
      `Не удалось загрузить пользователей. Ошибка: ${message}`,
    );
  }
});
