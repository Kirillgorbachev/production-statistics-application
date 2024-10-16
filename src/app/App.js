import { useState } from "react";
import { useLoginMutation } from "../Api/AuthApi";
import { useFetchUsersQuery } from "../Api/userApi";


function App() {
  // const [fetchUsers, {}] = useFetchUsersMutation();
  const {data: users,error, isLoading } = useFetchUsersQuery();
  const [login, {}] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      console.log(response);
      setEmail("");
      setPassword("")
    } catch (e) {
      console.log("Ошибка при отправке запроса")
    }
  }

  // const handleFetchUsers = async () => {
  //   try {
  //     const response = await fetchUsers();
  //     console.log(response);
  //   } catch (e) {
  //     console.log("Ошибка при получении пользователей")
  //   }
  // }

  if (isLoading) return <h1>Loading...</h1>



  return (
    <div className="App">
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
         type="password"
         value={password}
         placeholder="password"
         onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleLogin}>Логин</button>
      {/* <button onClick={handleFetchUsers}>Получить пользователей</button> */}
      <ul>
        {users ? users.map(user => (
          <li key={user.id}>{user.email}</li>
        )) : <h1>{error.message}</h1>}
      </ul>
    </div>
  );
}

export default App;
