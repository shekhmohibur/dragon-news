import QImg_1 from '../assets/swimming.png';
import QImg_2 from '../assets/class.png';
import QImg_3 from '../assets/playground.png';
import adsHere from '../assets/bg.png';
const QZone = () => {
    return (
        <>
            <div className='px-5 bg-[#F3F3F3] mt-5 space-y-6'>
                <h2 className="pt-5 text-xl font-semibold">Q-Zone</h2>
                <div>
                    <img className='w-full' src={QImg_1} />
                </div>
                <div>
                    <img className='w-full' src={QImg_2} />
                </div>
                <div>
                    <img className='w-full' src={QImg_3} />
                </div>

            </div>
            <div className='mt-5'>
                <img className='w-full' src={adsHere} />
            </div>
        </>
    );
};

export default QZone;