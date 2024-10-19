import { useState } from "react";
import './loginForm.css';
import { useLoginMutation } from "../../Api/AuthApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../Model/AuthSlice";
import { decodeToken } from "react-jwt";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, {isError, isSuccess, error}] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    //const roles = useSelector(userRole);  // Получаем роли из Redux

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login({ email, password }).unwrap();
            console.log('Успешный вход:', result);
            dispatch(setToken(result.token));

            const roles = decodeToken(result.token).roleIds;
            
             // Навигация на основе роли
            if (roles.includes(1)) {
                navigate('/owner/home');  // Перенаправление для владельца
            } else if (roles.includes(2)) {
                navigate('/user/home');  // Перенаправление для обычного пользователя
            }
          } catch (err) {
            console.error('Ошибка входа:', err);
          }
        setEmail("");
        setPassword("");
    }

    return (
        <form  className="loginForm" onSubmit={handleSubmit}>
            <input
                required
                autoComplete="off"
                className="input"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            >
            </input>
            <input
                required
                autoComplete="off"
                className="input"
                type="password"
                placeholder="пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            >
            </input>
            <button className="button" type="submit">Войти</button>

            {/* {isError && <p>Ошибка: {error}</p>} */}
            {isSuccess && <p>Вход выполнен успешно!</p>}
        </form >
    )
}

export default LoginForm;