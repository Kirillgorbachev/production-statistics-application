import { useState } from "react";
import './loginForm.css';
import { useLoginMutation } from "../Api/AuthApi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, {isError, isSuccess, error}] = useLoginMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login({ email, password }).unwrap();
            console.log('Успешный вход:', result);
            navigate('/statistics');
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

            {isError && <p>Ошибка: {error.data.message}</p>}
            {isSuccess && <p>Вход выполнен успешно!</p>}
        </form >
    )
}

export default LoginForm;