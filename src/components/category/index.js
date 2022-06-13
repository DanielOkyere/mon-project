import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
class Category extends Component {
    categories = [
        "Hotels",
        "Hostels",
        "Apartments",
        "Guesthouse",
        "Self-contained",
    ];
    constructor({ categories }) {
        super();
    }

    render() {
        return (
            <>
                <div>
                    <Container>
                        <div className="container">
                            <div className="row align-items-center p-3 text-center">
                                {this.categories.map((category, index) => (
                                    <div className="col-md">
                                        <Link
                                            to={`/category/${category}`}
                                            key={index}
                                        >
                                            {category}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}

export default Category;
