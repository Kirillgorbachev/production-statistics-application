import Footer from "../../widgets/footer/footer";
import UserHeader from "../../widgets/headers/userHeader/userHeader";
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div>
            <UserHeader />

            <main>
                <Outlet />
            </main>
            

            <Footer />
        </div>
    )
}

export default UserLayout;