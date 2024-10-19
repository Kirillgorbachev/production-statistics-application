import { useDispatch } from "react-redux";
import { logout } from "../Model/AuthSlice";
import { useLogoutApiMutation } from "../Api/AuthApi";

const UserHeader = () => {
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
           юзер хэдер
           <button onClick={handleLogout}>Выйти</button>
        </div>
    )
}

export default UserHeader;