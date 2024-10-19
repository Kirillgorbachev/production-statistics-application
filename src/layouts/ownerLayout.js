import Footer from "../footer/footer";
import OwnerHeader from "../headers/ownerHeader/ownerHeader";
import { Outlet } from 'react-router-dom';

const OwnerLayout = () => {
    return (
        <div>
            <OwnerHeader />

            <main>
                <Outlet />
            </main>
            

            <Footer />
        </div>
    )
}

export default OwnerLayout;