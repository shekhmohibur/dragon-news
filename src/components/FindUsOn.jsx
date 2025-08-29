import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
    return (
        <>
            <h2 className="py-5 text-xl font-semibold">Find Us On</h2>
            <div className="flex flex-col">
                <button className="btn rounded-none px-5 py-8 bg-base-100 justify-start font-medium text-base text-gray-500"><FaFacebook className="text-blue-500"/>Facebook</button>
                <button className="btn rounded-none px-5 py-8 bg-base-100 justify-start font-medium text-base text-gray-500"><FaTwitter className="text-cyan-400"/>Twitter</button>
                <button className="btn rounded-none px-5 py-8 bg-base-100 justify-start font-medium text-base text-gray-500"><FaInstagram className="text-pink-500"/> InstaGram</button>
            </div>
        </>
    );
};

export default FindUsOn;