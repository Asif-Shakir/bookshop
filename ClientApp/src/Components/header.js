import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Header = () => {
  const ctx = useContext(AuthContext);
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
                {ctx.getToken && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/addbook">
                      Add Book
                    </Link>
                  </li>
                )}
              </div>
              {!ctx.getToken ? (
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
                <div className="d-flex align-items-center">
                  <li className="nav-item">
                    <p className="m-0 fw-bold text-success">
                      {ctx.getToken?.email}
                    </p>
                  </li>
                  <li className="nav-item">
                    <span
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      onClick={ctx.logout}
                    >
                      Logout
                    </span>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
