import Footer from "../../widgets/footer/footer";
import OwnerHeader from "../../widgets/headers/ownerHeader/ownerHeader";
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