import NavBar from "../../components/navbar/index";
import Category from "../../components/category";
import Footer from "../../components/footer";
import Search from "../../components/search";
import ProductListing from "../../components/products/listing";
import product from "../../services/products"
function Home() {
    return (
        <>
            <div className="App">
                <NavBar />
                <Category />
                <Search />
		        <ProductListing products={product} />
                <Footer />
            </div>
        </>
    );
}
export default Home;
