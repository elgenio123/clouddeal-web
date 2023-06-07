import React from "react";
import { Link } from "react-router-dom";
import Search from "../../assets/search.svg";
 const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Cloud deal
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/"
               className={({ isActive, isPending }) =>
               isPending ? "link" : isActive ? "link" : ""
             }>
              <a  className="page-scroll">
                Home
              </a>
              </Link>
            </li>
            <li>
            <Link to="/chat">
              <a  className="page-scroll">
                Chat
              </a>
            </Link>
            </li>
            <li>
            <Link to="/dashboard">
              <a className="page-scroll">
                Dashboard
              </a>
              </Link>
            </li>
            <li>
            <Link to="/publish-product">
              <a  className="page-scroll">
                Publish
              </a>
              </Link>
            </li>
            <li>
            <Link to="/login">
              <a className="page-scroll">
                Login
              </a>
              </Link>
            </li>
            <li>
              <Link to="/register">
              <a  className="page-scroll">
                Register
              </a>
              </Link>
            </li>
            <li>
            <Link to="/contact">
              <a  className="page-scroll">
                Contact
              </a>
              </Link>
              <Link to="/payement">
              <a  className="page-scroll">
                payement
              </a>
              </Link>
            </li>
            <img src={Search} alt="search" id="search"/>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation