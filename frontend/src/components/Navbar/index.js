import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { loginStatus, loginCbHandler } = props;
  const navigate = useNavigate();
  const loginButton = () => {
    loginCbHandler(true);
  };

  const logoutButton = () => {
    localStorage.clear();
    loginCbHandler(false);
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Admin
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productImage">
                  Product Image
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lineItem">
                  Line Item
                </Link>
              </li>
            </ul>
            {loginStatus ? (
              <button
                onClick={() => logoutButton()}
                className="btn btn-outline-success"
                type="submit"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => loginButton()}
                className="btn btn-outline-success"
                type="submit"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
