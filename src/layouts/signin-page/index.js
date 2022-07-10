import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { authSignin } from "../../services/auth";
import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate();

    const [formData, setformData] = useState({
        email: "",
        password: "",
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sendUserInfo = async (event) => {
        event.preventDefault();
        const userData = {
            ...formData,
        };
        const user = await authSignin(userData);
        if (user.access_token != null) navigate("/");
    };

    return (
        <>
            <Container>
                <div className="login-page mb-3">
                    <h1 className="brand-logo text-center display-1 mt-5 mb-5">
                        Logo
                    </h1>
                    <div className="login-page-item">
                        <Form onSubmit={sendUserInfo}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setformData({
                                            ...formData,
                                            email: e.target.value,
                                        });
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => {
                                        setformData({
                                            ...formData,
                                            password: e.target.value,
                                        });
                                    }}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Text className="text-muted">
                                    Dont have an account yet?
                                </Form.Text>
                                <Link to="/signup" className="sign-up-text">
                                    Sign Up
                                </Link>
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
                                <Button variant="outline-primary" size="lg">
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
