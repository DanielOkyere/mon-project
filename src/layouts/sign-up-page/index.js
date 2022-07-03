import { Container, Form, Button, Nav } from "react-bootstrap";
import NavBar from "../../components/navbar";

function SignUp() {
    return (
        <>
            <NavBar />
            <Container>
                <div className="sign-up-form-container">
                    <Form>
                        <Form.Group className="mb-3" 
                        controlId="nameGroup">
                            
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default SignUp;
