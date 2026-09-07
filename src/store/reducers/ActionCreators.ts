import axios from "axios";
import type { AppDispatch } from "../store";
import type { IUser } from "../../models/IUser";
import { userSlice } from "./usersSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users",
    );
    dispatch(userSlice.actions.usersFetchingSuccess({ users: response.data }));
  } catch (e) {
    if (e instanceof Error)
      dispatch(userSlice.actions.usersFetchingError({ errorText: e.message }));
  }
};
