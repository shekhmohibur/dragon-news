const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-base-100 p-5 md:p-20">
                <h2 className="md:text-3xl font-semibold text-center mb-12">Register your Account</h2>
                <hr className="my-5" />
                <form>
                    <div className="flex flex-col mb-6">
                        <label className="mb-4 md:text-xl font-semibold">Your Name</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="text" placeholder="Enter your name" />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-4 md:text-xl font-semibold">Photo Url</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="text" placeholder="Enter your Photo Url" />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-4 md:text-xl font-semibold">Email</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="text" placeholder="Enter your email address" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-4 md:text-xl font-semibold">Password</label>
                        <input className="text-lg bg-[#F3F3F3] p-5 md:w-[400px] lg:w-[558px] outline-none rounded-lg placeholder:capitalize" type="Password" placeholder="enter your password" />
                    </div>
                    <div className="flex gap-2 text-lg my-7">
                    <input type="checkbox" className="checkbox checkbox-md"/>
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