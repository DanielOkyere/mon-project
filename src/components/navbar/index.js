import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <Navbar bg="light" className="fixed">
                <Container>
                    <Navbar.Brand className="font-weight-bold">
                        <Link to="/home">Logo</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav.Link>Home</Nav.Link>
                    </Navbar.Collapse>
                    <div className="row">
                        <div className="col-md-6">
                            <Button className="bg-light text-dark bg-primary">
                                Login
                            </Button>
                        </div>
                        <div className="col-md-6">
                            <Button>Signup</Button>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
