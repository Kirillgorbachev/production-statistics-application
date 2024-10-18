import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Model/AuthSlice";
import { isLoggedIn, token, userId } from "../Model/AuthSlice";

const MainHeader = () => {
    const dispatch = useDispatch();

    const loggedIn = useSelector(isLoggedIn); // Получаем статус авторизации
    const currentToken = useSelector(token); // Получаем текущий токен
    const currentUserId = useSelector(userId); // Получаем текущий userId

    const handleLogout = () => {
        console.log("before logout");
        console.log("isLoggedIn :" + loggedIn);
        console.log("token :" + currentToken);
        console.log("userId :" + currentUserId);
        dispatch(logout());
        console.log("after logout");
        console.log("isLoggedIn :" + isLoggedIn);
        console.log("token :" + token);
        console.log("userId :" + userId);

    }

    return (
        <div className="header">
           мэйн хэдер
           <button onClick={handleLogout}>Выйти</button>
        </div>
    )
}

export default MainHeader;