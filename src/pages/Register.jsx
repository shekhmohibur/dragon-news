import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { CreateNewUser, setUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name")
        const photoUrl = form.get("photoUrl")
        const email = form.get("email")
        const password = form.get("password")
        CreateNewUser(email, password)
            .then(userData => {
                const user = userData.user;
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-base-100 p-5 md:p-20">
                <h2 className="md:text-3xl font-semibold text-center mb-12">Register your Account</h2>
                <hr className="my-5" />
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-6">
                        <label className="mb-4 md:text-xl font-semibold">Your Name</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="text" placeholder="Enter your name" name="name" />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-4 md:text-xl font-semibold">Photo Url</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="text" placeholder="Enter your Photo Url" name="photoUrl" />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-4 md:text-xl font-semibold">Email</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="email" placeholder="Enter your email address" name="email" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-4 md:text-xl font-semibold">Password</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="Password" placeholder="enter your password" name="password" />
                    </div>
                    <div className="flex gap-2 text-lg my-7">
                        <input type="checkbox" className="checkbox checkbox-md" />
                        <p className="text-[#5f5f5f]">Accept <span className="font-semibold">Term & Conditions</span></p>
                    </div>
                    <div>
                        <button className="btn btn-neutral bg-[#403F3F] w-full text-xl py-7">Register</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;