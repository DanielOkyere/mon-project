import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import NavBar from "./components/navbar";
import Category from "./components/category";
import Footer from "./components/footer";
import Search from "./components/search";

function App() {
    return (
        <>
            <Container>
                <div className="App">
                    <NavBar />
                    <Category />
                    <Search />
                    <Footer />
                </div>
            </Container>
        </>
    );
}

export default App;
