import { Container, Form, Button } from "react-bootstrap";
import NavBar from "../../components/navbar";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <NavBar />
            <Container>
                <div className="sign-up-form-container">
                <h1 className="brand-logo text-center display-1 mt-5 mb-5">
                        Logo
                    </h1>
                    <Form className="signup-form-element">
                        <div className="row">
                            <Form.Group
                                className="mb-3 col-sm-6"
                                controlId="firstName"
                            >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3 col-sm-6"
                                controlId="lastName"
                            >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Form.Group>
                        </div>
                        <div className="row">
                            <Form.Group className="mb-3 col-sm-6" controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col-sm-6" controlId="email">
                                <Form.Label> Confirm Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group>
                                
                            </Form.Group>
                        </div>
                        <Form.Group>
                            <Form.Text className="text-muted">
                                Have an account already?
                            </Form.Text>
                            <Link to="/signin" className="sign-up-text">
                                Sign In
                            </Link>
                        </Form.Group>
                        <br />
                        <div className="row">
                            <Button
                                variant="primary"
                                type="submit"
                                size="lg"
                                className="col-md-4 offset-1"
                            >
                                Register
                            </Button>
                            <br />
                            <Button
                                variant="outline-primary"
                                type="submit"
                                size="lg"
                                className="col-md-4 offset-1"
                            >
                                <Link to="/home">Cancel</Link>
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default SignUp;
