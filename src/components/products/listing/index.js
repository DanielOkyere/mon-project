import React, { Component } from "react";

import Container from "react-bootstrap/Container";
const products = [
    {
        id: 1,
        name: "House 1",
        price: 100000,
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "This is a house",
        location: "Hanoi",
        rate: 4,
        freq: "/month",
    },
    {
        id: 2,
        name: "House 1",
        price: 100000,
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "This is a house",
        location: "Hanoi",
        rate: 4,
        freq: "/month",
    },
    {
        id: 3,
        name: "House 1",
        price: 100000,
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "This is a house",
        location: "Hanoi",
        rate: 4,
        freq: "/month",
    },
    {
        id: 4,
        name: "House 1",
        price: 100000,
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "This is a house",
        location: "Hanoi",
        rate: 4,
        freq: "/month",
    },
];
class ProductListing extends Component {
    constructor({ products }) {
        super();
    }
    render() {
        return (
            <>
                <Container>
                    <div className="row">
                        {products.map((product, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4 shadow-sm">
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {product.name}
                                        </h5>
                                        <p className="card-text">
                                            {product.description}
                                        </p>
                                        <h4 className="card-text">
                                            {product.price}
                                            <span className="text-muted">
                                                {product.freq}
                                            </span>
                                        </h4>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                            <small className="text-muted">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="#EF4444"
                                                    class="bi bi-star-fill"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>
                                                {product.rate}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </>
        );
    }
}
export default ProductListing;
