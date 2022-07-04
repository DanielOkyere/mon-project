import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Search(props) {

    return (
        <>
            <Container>
                <div className="row align-items-center m-3 p-3 text-center">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 col"
                            aria-label="Search"
                        />
                        <Button variant="primary" className="rounded" >
                            Search
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default Search;
