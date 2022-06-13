import NavBar from "../../components/navbar/index";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Search from "../../components/search";
function Home() {
    return (
        <>
            <div className="App">
                <NavBar />
                <Category />
                <Search />
                <Footer />
            </div>
        </>
    );
}
export default Home;
