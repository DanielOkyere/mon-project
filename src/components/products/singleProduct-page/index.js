/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import products from "../../../services/products";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar";
import Star from "../../star";
import Button from "react-bootstrap/Button";
import Footer from "../../footer";

function SingleProduct(props) {
    const { productId } = useParams();
    const singleProduct = products.find(
        (product) => product.id === Number(productId),
    );
    return (
        <>
            <Navbar />
            <Container>
                <div className="row ppage">
                    <div className="col-12 col-md-6 ">
                        <div className="product-info">
                            <div className=" display-1 p-3 prod-name ">
                                {singleProduct.name}
                            </div>
                            <div className="display-4 p-3">
                                {singleProduct.description}
                            </div>
                            <div className="prod-rate p-3 display-4">
                                <Star/>
                                {singleProduct.rate}
                            </div>
                            <div className="d-grid gap-2">
                                <Button className="bg-light text-dark w-25" size="sm">
                                    Rent
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="vl"></div>
                    </div>
                    <div className="col-md-5 ">
                        <div className="product-images">
                            <div className="prod-images col">
                                <img
                                    src={singleProduct.image}
                                    className="main-prod-image"
                                />
                            </div>
                            <div className="recently-viewed col">
                                <h5 className="p-3">Recently Viewed</h5>
                                <div className="row">
                                    <div className="prod-images col">
                                        <img
                                            src={singleProduct.image}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="prod-images col">
                                        <img
                                            src={singleProduct.image}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="prod-images col">
                                        <img
                                            src={singleProduct.image}
                                            width="100%"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    );
}

export default SingleProduct;
