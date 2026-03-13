import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const Root = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto xl:px-1 md:px-8 p-5">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;