import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
    const [categories, setCatogories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(category => setCatogories(category.data.news_category))
    }, [])
    return (
        <div>
            <h2 className="font-semibold md:text-xl">All Category</h2>
            <div className="flex flex-col gap-2 mt-4">
                {
                    categories?.map(category => <NavLink className="btn font-semibold md:text-xl max-w-64 py-6 bg-base-100 border-none rounded-none hover:bg-[#E7E7E7]" key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNav;