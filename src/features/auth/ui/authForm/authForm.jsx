import { useState } from "react";
import './authForm.css';
import { useLoginMutation } from "../../model/AuthApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../model/AuthSlice";
import { decodeToken } from "react-jwt";
import {Button, Input} from "../../../../shared/ui";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, {isSuccess}] = useLoginMutation();
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
            <Input
                required
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                required
                type="password"
                placeholder="пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit"> Войти </Button>

            {/* {isError && <p>Ошибка: {error}</p>} */}
            {isSuccess && <p>Вход выполнен успешно!</p>}
        </form >
    )
}

export default AuthForm;