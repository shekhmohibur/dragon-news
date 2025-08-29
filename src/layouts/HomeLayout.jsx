import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/layoutComponent/LeftNav";
import RightNav from "../components/layoutComponent/RightNav";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
    return (
        <div className="font-poppins w-11/12 mx-auto">
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <NavBar></NavBar>
            </header>
            <main className="grid grid-cols-12">
                <aside className="col-span-3">
                    <LeftNav></LeftNav>
                </aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;