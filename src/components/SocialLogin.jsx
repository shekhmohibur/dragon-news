import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLogin = () => {
    return (
        <>
            <div>
                <h2 className="py-5 text-xl font-semibold">Login With</h2>
                <div className="flex flex-col gap-2">
                    <button className="btn border-2 border-blue-400 rounded-md py-6 bg-base-100 md:*:text-lg font-normal hover:bg-blue-400 text-blue-400 hover:text-white"><FaGoogle /> Login with Google</button>
                    <button className="btn border-2 border-black rounded-md py-6 bg-base-100 md:*:text-lg font-normal hover:bg-black hover:text-white"><FaGithub /> Login with Github</button>
                </div>
            </div>
        </>

    );
};

export default SocialLogin;