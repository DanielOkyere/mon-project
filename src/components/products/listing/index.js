import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Star from "../../star"


function ProductListing (props)  {
        return (
            <>
                <Container>
                    <div className="row">
                        {props.products.map((product, index) => (
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
                                                <Link
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                    to={`/product/${product.id}`}
                                                    key={index}
                                                >
                                                    View
                                                </Link>
                                                <Link
                                                    type="button"
                                                    className="btn btn-sm btn-outline-secondary"
                                                    to={`/product/edit/${product.id}`}
                                                    key={index}
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                            <small className="text-muted">
                                               <Star/>
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
export default ProductListing;
