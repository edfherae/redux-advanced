import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type User } from "../../models/User";
import { fetchUsers } from "./ActionCreators";

interface UsersState {
  entities: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  entities: [],
  isLoading: false,
  error: "",
};

export const usersSlice = createSlice({
  initialState: initialState,
  name: "users",
  reducers: {},
  // usersFetching(draft) {
  //   draft.isLoading = true;
  // },
  // usersFetchingSuccess: (draft, action: PayloadAction<{ users: User[] }>) => {
  //   draft.isLoading = false;
  //   draft.error = null;
  //   draft.entities = action.payload.users;
  // },
  // usersFetchingError: (draft, action: PayloadAction<{ errorText: string }>) => {
  //   draft.isLoading = false;
  //   draft.error = action.payload.errorText;
  // },
  extraReducers(builder) {
    builder.addAsyncThunk(fetchUsers, {
      pending: (draft) => {
        draft.isLoading = true;
      },
      fulfilled: (draft, action) => {
        draft.isLoading = false;
        draft.error = null;
        draft.entities = action.payload;
      },
      rejected: (draft, action) => {
        draft.isLoading = false;
        draft.error = action.payload ?? "Ошибка загрузки";
      },
    });
  },
});

export default usersSlice.reducer;
