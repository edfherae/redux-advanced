import { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchUsers } from "./store/reducers/ActionCreators";
import { userSlice } from "./store/reducers/usersSlice";

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const isLoading = useAppSelector((state) => state.users.isLoading);
  const error = useAppSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <section id="center">
        <button onClick={() => fetchingMechanism(dispatch)}>Fetch users</button>
        {isLoading && <p>Загрузка...</p>}
        {!isLoading && error.length > 0 && <p>Ошибка: {error}</p>}
        {!isLoading && error.length === 0 && users.length === 0 && (
          <p>Здесь будут юзеры</p>
        )}
        {!isLoading && error.length === 0 && users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li>{user.name}</li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default App;
