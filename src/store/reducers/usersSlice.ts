import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type IUser } from "../../models/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  initialState: initialState,
  name: "users",
  reducers: {
    usersFetching(draft) {
      draft.isLoading = true;
    },
    usersFetchingSuccess: (
      draft,
      action: PayloadAction<{ users: IUser[] }>,
    ) => {
      draft.isLoading = false;
      draft.error = "";
      draft.users = action.payload.users;
    },
    usersFetchingError: (
      draft,
      action: PayloadAction<{ errorText: string }>,
    ) => {
      draft.isLoading = false;
      draft.error = action.payload.errorText;
    },
  },
});

export default userSlice.reducer;
