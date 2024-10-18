import Footer from "../footer/footer";
import AuthHeader from "../headers/authHeader";
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <AuthHeader />

            <main>
                <Outlet />
            </main>
            

            <Footer />
        </div>
    )
}

export default AuthLayout;