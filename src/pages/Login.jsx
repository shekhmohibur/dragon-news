import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {UserLogin, setUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        UserLogin(email, password)
        .then(userData => {
            const user = userData;
            setUser(user);
        })
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage)
  });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-base-100 p-5 md:p-20">
                <h2 className="md:text-3xl font-semibold text-center mb-12">Login your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-6">
                        <label className="mb-4 md:text-xl font-semibold">Email</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="text" placeholder="Enter your email address" name="email"/>
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-4 md:text-xl font-semibold">Password</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="Password" placeholder="enter your password" name="password"/>
                    </div>
                    <div>
                        <button className="btn btn-neutral bg-[#403F3F] w-full text-xl py-7">Login</button>
                    </div>
                </form>
                <div className="flex gap-2 text-lg mt-7 justify-center">
                    <p className="text-[#5f5f5f] font-semibold">Don't Have an Account ?</p>
                    <Link to={'/auth/register'} className="text-red-500  font-semibold">Register</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Login;