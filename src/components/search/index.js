import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

function Search(props) {
    return (
        <>
            <Container>
                <div className="row align-items-center m-3 p-3 text-center">
                    <Form className="d-flex">
                        <Dropdown bg="light">
                            <Dropdown.Toggle
                                variant="primary"
                                id="dropdown-basic"
                            >
                                City / Province
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Something else
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 col"
                            aria-label="Search"
                        />
                        <Button variant="primary" className="rounded">
                            Search
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default Search;
