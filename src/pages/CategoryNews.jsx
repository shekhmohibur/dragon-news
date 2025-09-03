import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";
const CategoryNews = () => {
    const { data:NewsData } = useLoaderData();
    return (
        <div>
           <h1 className="text-xl font-semibold">Dragon News Home</h1>
           <div>
            {
                NewsData?.map(news =>  <NewsCard key={news._id} news={news}></NewsCard>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;