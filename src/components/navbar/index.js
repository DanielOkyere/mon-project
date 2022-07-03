import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <Navbar bg="light" className="fixed" expand="lg">
                <Container>
                    <Navbar.Brand className="font-weight-bold">
                        <Link to="/home">Logo</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav justify="True" fill="True">
                            <Nav.Item>
                                <Nav.Link>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Button className="bg-light text-dark">
                                        <Link to="/signin">Login</Link>
                                    </Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Button>
                                        <Link to="/signup">Register</Link>
                                    </Button>
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
