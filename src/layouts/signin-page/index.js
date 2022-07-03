import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signin() {
    return (
        <>
            <Container>
                <div className="login-page">
                    <h1 className="brand-logo text-center display-1 mt-5 mb-5">
                        Logo
                    </h1>
                    <div className="login-page-item">
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Text className="text-muted">
                                    Dont have an account yet?
                                </Form.Text>
                            <Link to="/signup" className="sign-up-text">Sign Up</Link>
                            </Form.Group>
                            <br />
                            <div className="d-grid gap-2">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    size="lg"
                                >
                                    Sign In
                                </Button>
                                <br />
                                <Button
                                    variant="outline-primary"
                                    type="submit"
                                    size="lg"
                                >
                                    <Link to="/home">Cancel</Link>
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    );
}
export default Signin;
