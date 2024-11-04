import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/model/AuthSlice";
import { useLogoutApiMutation } from "../../../features/auth/model/AuthApi";
import {Button} from "../../../shared/ui";

const UserHeader = () => {
    const dispatch = useDispatch();
    const [logoutApi] = useLogoutApiMutation();

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
           <Button onClick={handleLogout}>Выйти</Button>
        </div>
    )
}

export default UserHeader;