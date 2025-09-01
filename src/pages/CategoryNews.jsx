import { FaEye } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const { data:NewsData } = useLoaderData();
    console.log(NewsData)
    return (
        <div>
           <h1 className="text-xl font-semibold">Dragon News Home</h1>
           <div>
            {
                NewsData?.map(news =>     <div key={news._id} className="card bg-base-100 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-4 p-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={news.author.img} alt="author" />
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold">{news.author.name}</h2>
          <p className="text-xs text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h1 className="text-lg font-bold leading-tight text-blue-800 hover:underline cursor-pointer">
          {news.title}
        </h1>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img src={news.thumbnail_url} alt="news thumbnail" className="rounded-lg w-full h-[262px] object-cover" />
      </figure>

      {/* Details */}
      <div className="card-body py-4 px-4">
        <p className="text-sm text-gray-600">
          {news.details.length > 150 ? news.details.slice(0, 150) + "..." : news.details}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="rating rating-sm">
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked readOnly />
            </div>
            <span className="text-sm text-gray-700">{news.rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>

        {/* Read More */}
        <div className="mt-2">
          <button className="text-orange-600 hover:underline text-sm">Read More</button>
        </div>
      </div>
    </div>)
            }
           </div>
        </div>
    );
};

export default CategoryNews;