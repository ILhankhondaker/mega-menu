
// import Header from '../Component/Header/Header';
import { Outlet } from 'react-router-dom';
import MegaMenu from '../Component/MegaMenu/MegaMenu';

const Main = () => {
    return (
        <div>
            <MegaMenu></MegaMenu>
            {/* <Header></Header> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;