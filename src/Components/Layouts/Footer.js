import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer  py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-white">FinkSupply</h3>
            <p className="fs-6 text-white fw-medium">
               We are a logistics company dedicated to providing
              you with the best services.We are here to help you with all your
              logistics needs.
            </p>
          </div>
          <div className="col-md-4  ps-3">
            <h3 className="text-white">Contact us</h3>
            <address className="fw-bold text-white">
              FinkSupply Solutions <br />
              P.O Box 7 Awe Street <br />
               Ago Palace Okota Isolo <br />
              Lagos, Nigeria <br />
              +234-703-733-3809 <br />
              <Link to="mailto:info@finksupply.com" className="text-decoration-none text-white">
                info@finksupply.com
              </Link>
            </address>
          </div>
          <div className="col-md-4">
            <h3 className="text-white">Company</h3>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="text-decoration-none text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-decoration-none text-white">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
