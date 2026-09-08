import { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { usersSlice } from "./store/reducers/usersSlice";
import PostContainer from "./components/PostContainer";

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.entities);
  const isLoading = useAppSelector((state) => state.users.isLoading);
  const error = useAppSelector((state) => state.users.error);

  return (
    <>
      <section id="center">
        {/* <button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
        {isLoading && <p>Загрузка...</p>}
        {!isLoading && error && <p>Ошибка: {error}</p>}
        {!isLoading && error === null && users.length === 0 && (
          <p>Здесь будут юзеры</p>
        )}
        {!isLoading && error === null && users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li>{user.name}</li>
            ))}
          </ul>
        )} */}

        <PostContainer />
      </section>
    </>
  );
}

export default App;
