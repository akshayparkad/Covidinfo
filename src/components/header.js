import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const bgColor = {
    backgroundColor: "#2E64FE"
  }
  return (
    <div className="container mb-4">



      <nav className="navbar navbar-expand-lg navbar-light " style={bgColor}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white h1">
            Covid Info
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white" aria-current="page">
                  Home   |
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pincode" className="nav-link text-white">
                  Search by Pincode |
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/certificate" className="nav-link text-white">
                  Download Vaccine Certificate |
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                About |
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Contact Us |
                </Link>
              </li>
            </ul>
            <span className="navbar-text">Other Text</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
