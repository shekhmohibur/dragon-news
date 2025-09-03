import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
const NavBar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-5">
            <div className=""></div>
            <div className="space-x-6 *:text-[#706F6F] *:md:text-lg">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/career'}>Career</Link>
            </div>
            <div className="login flex gap-2">
                <img src={userIcon} alt="userIcon" />
                <Link to={'/auth/login'} className="btn bg-[#403F3F] btn-neutral rounded-none font-semibold px-8 text-xl">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;