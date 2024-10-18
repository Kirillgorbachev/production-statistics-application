import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Model/AuthSlice";
import { isLoggedIn, token, userId } from "../Model/AuthSlice";
import { useLogoutApiMutation } from "../Api/AuthApi";

const MainHeader = () => {
    const dispatch = useDispatch();
    const [logoutApi, {}] = useLogoutApiMutation();

    const handleLogout = async () => {
        try {
            await logoutApi();
            dispatch(logout());

        } catch (e) {
            console.log(e.message);
        }

    }

    return (
        <div className="header">
           мэйн хэдер
           <button onClick={handleLogout}>Выйти</button>
        </div>
    )
}

export default MainHeader;