import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../assets/search.svg";
import loginImage from "../../assets/images/user.png"
import registerImage from "../../assets/images/add-user.png"
import profileImage from "../../assets/images/userprofile.png"
 const Navigation = (props) => {

  const [searchTerm, setSearchTerm] = useState('');

  const searchAds = async (title) =>{
    console.log(title);
  }

  return (
    <nav id="menu" className="navbar-default navbar-fixed-top">
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
          <a className="navbar-brand page-scroll">
            Cloud deal
          </a>
          <input
            placeholder="Search on Cloud Deal"
            className="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <img
            src={Search}
            alt="search"
            className="search-img"
            onClick={() => {
              searchAds(searchTerm);
            }}
          />
          <div id="login-container">
            <img src={loginImage} />
            <button >Login</button>
          </div>
          <div id="register-container">
            <img src={registerImage} />
            <button >Register</button>
          </div>
          <div id="userprofile-container">
            <img src={profileImage} />
            <button >Profile</button>
          </div>
          <button id="button-publish">Publish ad</button>{" "}
        </div>
        
        <div
          className=" navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="navbar-nav">
            <li></li>
            <li></li>
            <li>
              <Link to="/dashboard">
                <a className="page-scroll">Dresses & shoes</a>
              </Link>
            </li>
            <li>
              <Link to="/publish-product">
                <a className="page-scroll">Electroniques</a>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <a className="page-scroll">Buildings</a>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <a className="page-scroll">Mode & Beauty</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a className="page-scroll">Housing</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a className="page-scroll">Sports</a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a className="page-scroll">Others</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation