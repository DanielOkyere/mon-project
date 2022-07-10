import { Container } from "react-bootstrap";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

function PropertyPage() {
    return (
        <>
            <NavBar />
            <Container>
                <div className="select-property mb-3">
                    <div className="display-1">Type of property</div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Link>
                                <img src="" alt="Hotels" />
                            </Link>
                        </div>
                        <div className="col-sm-6">
                            <Link>
                                <img src="" alt="Hostels" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}
export default PropertyPage;
