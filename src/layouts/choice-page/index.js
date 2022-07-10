import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import{NavBar, Footer} from "../../components";

function ChoicePage() {
   return(
   <>
    <NavBar/>
        <Container>
            <div className="mb-5">
            <div className="mt-4 p-3 mb-4">
                <h1 className="display-sm-1 text-center">Are you one of these choice?</h1>
            </div>
            <div className="choice-page mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 ml-3 ">
                    <h2 className="display-2 text-center">Customer</h2>
                    <Link to="/home">
                    <img
                        src="https://picsum.photos/700/500?random=1"
                        alt="Customer"
                        className="rounded img-fluid"
                    ></img>
                    </Link>
                </div>
                <div className="col-md-6">
                    <h2 className="display-2 text-center">Owner</h2>
                    <Link to="/signin">
                        <img
                            src="https://picsum.photos/700/500?random=7"
                            alt="Owner"
                            className="rounded img-fluid"
                        ></img>
                    </Link>
                </div>
            </div>
            </div>
            </div>
        </Container>
        <Footer/>
    </>
   );
}

export default ChoicePage;
