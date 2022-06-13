import NavBar from "../../components/navbar/index";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Search from "../../components/search";
import ProductListing from "../../components/products/listing";
function Home() {
    return (
        <>
            <div className="App">
                <NavBar />
                <Category />
                <Search />
		<ProductListing />
                <Footer />
            </div>
        </>
    );
}
export default Home;
