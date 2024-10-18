import Footer from "../footer/footer";
import MainHeader from "../headers/mainHeader";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <MainHeader />

            <main>
                <Outlet />
            </main>
            

            <Footer />
        </div>
    )
}

export default MainLayout;