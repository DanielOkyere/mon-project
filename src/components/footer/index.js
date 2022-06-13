import Container from "react-bootstrap/Container";
function Footer() {
    return (
        <>
            <footer className="page-footer font-small blue pt-4 bg-light">
                <Container>
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <h5 className="text-uppercase">Logo</h5>
                                <p>
                                    Find Affordable and Luxurious Accommodations
                                    while staying focused on you education.
                                </p>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-0" />

                            <div className="col-md-3 mb-md-0 mb-3">
                                <h5 className="text-uppercase">Pages</h5>
                                <ul className="list-unstyled text-left">
                                    <li>
                                        <a href="#!">Hotels</a>
                                    </li>
                                    <li>
                                        <a href="#!">Hostels</a>
                                    </li>
                                    <li>
                                        <a href="#!">Apartments</a>
                                    </li>
                                    <li>
                                        <a href="#!">Self-Contained</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copyright text-center py-3">
                        © 2020 Copyright:
                        <a href="#!" className="text-uppercase">
                            Logo
                        </a>
                    </div>
                </Container>
            </footer>
        </>
    );
}
export default Footer;
