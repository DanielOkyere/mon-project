import React, { Component } from "react";
import Container from "react-bootstrap/Container";
class Category extends Component {
    constructor(props) {
        super();
    }
    
    render() {
        return (
            <>
                <div>
                    <Container>
                        <div className="row align-items-center m-3 p-3 text-center">
                            <div className="col-md">
                                <h5>Hotels</h5>
                            </div>
                            <div className="col-md">
                                <h5>Hostels</h5>
                            </div>
                            <div className="col-md">
                                <h5>Apartments</h5>
                            </div>
                            <div className="col-md">
                                <h5>Guesthouse</h5>
                            </div>
                            <div className="col-md">
                                <h5>Self-contained</h5>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default Category;
