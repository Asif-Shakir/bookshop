import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const userToken = JSON.parse(localStorage.getItem("user_token"));
  const handleLogout = () => {
    localStorage.removeItem("user_token");
    window.location.href = "/login";
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>Bookshop</b>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="w-100 align-items-center navbar-nav justify-content-between mb-2 mb-lg-0">
              <div className="d-flex">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addbook">
                    Add Book
                  </Link>
                </li>
              </div>
              {!userToken?.token ? (
                <div className="d-flex">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </div>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
