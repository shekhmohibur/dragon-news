import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="font-poppins w-11/12 mx-auto">
                <header>
                    <NavBar></NavBar>
                </header>
                <Outlet></Outlet>
            </div>
        </div>
    );

};

export default AuthLayout;