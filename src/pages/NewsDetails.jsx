import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layoutComponent/RightNav";
import { FaArrowLeft } from 'react-icons/fa';
const NewsDetails = () => {
    const data = useLoaderData();
    const newsData = data.data[0];
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="mt-5 md:text-xl font-semibold">Dragon News</h2>
                    <div className="w-full mx-auto p-4">
                        {/* Image */}
                        <img
                            src={newsData.image_url}
                            alt={newsData.title}
                            className="w-full rounded-lg mb-4"
                        />

                        {/* Title */}
                        <h2 className="text-lg font-bold mb-2">
                            {newsData.title}
                        </h2>

                        {/* Author and Published Date */}
                        <div className="flex items-center mb-4 space-x-3">
                            <img
                                src={newsData.author.img}
                                alt={newsData.author.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm font-semibold">{newsData.author.name}</p>
                                <p className="text-xs text-gray-500">{new Date(newsData.author.published_date).toLocaleString()}</p>

                            </div>
                        </div>

                        {/* Details Text */}
                        <p className="text-sm text-justify leading-relaxed">
                            {newsData.details}
                        </p>

                        {/* Button */}
                        <Link to={'/'} className="btn btn-error btn-sm">
                            ← All news in this category
                        </Link>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;