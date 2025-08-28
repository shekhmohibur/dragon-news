import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-7'>
            <div className="logo">
                <img className='w-md' src={logo} alt="Dragon News Logo" />
            </div>
            <h3 className='md:text-lg text-gray-500'>Journalism Without Fear or Favour</h3>
            <p className='md:text-xl'>
                {moment().format("dddd, MMMM Do, YYYY")}
            </p>
        </div>
    );
};

export default Header;