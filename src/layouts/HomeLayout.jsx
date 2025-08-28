import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                 <section className="mx-auto max-w-6xl">
                    <LatestNews></LatestNews>
                 </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;