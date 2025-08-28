import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-[#F3F3F3] p-4">
            <p className="bg-[#D72050] text-white py-2 px-5 text-lg">Latest</p>
            <Marquee speed={90} pauseOnHover={true} className="space-x-10">
                <Link to={'/news'} className="md:text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to={'/news'} className="md:text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to={'/news'} className="md:text-lg font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;