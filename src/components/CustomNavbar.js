import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"

export default function CustomNavbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top bg-color"
      >
        <div className="container">
          <Link
            className="navbar-brand nav-font"
            to="/"
          >
            <img src={logo} alt="img" className="img-fluid logo" width={"150px"} height={"100px"}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase font-13 font-bold">
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white hover"
                  to="/about"
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/slider1"
                >
                  Register Earn
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/Blogs"
                >
                  Stores
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/contact"
                >
                  Discounts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/contact"
                >
                  Gastronomy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/contact"
                >
                  Social Responsiblity
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/contact"
                >
                 Commercial Contact
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-login text-white border text-uppercase btn-radius font-bold font-13">login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
