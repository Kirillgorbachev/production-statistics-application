import Footer from "../footer/footer";
import UserHeader from "../headers/userHeader";
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