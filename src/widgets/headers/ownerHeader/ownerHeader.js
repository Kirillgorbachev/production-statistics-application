import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/model/AuthSlice";
import { useLogoutApiMutation } from "../../../features/auth/model/AuthApi";
import "./ownerHeader.css";

const OwnerHeader = () => {
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
        <div className="owner-header">
           <p>owner хэдер</p>
           <button className="logout-button" onClick={handleLogout}>Выйти</button>
        </div>
    )
}

export default OwnerHeader;