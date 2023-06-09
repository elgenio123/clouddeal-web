import React, { useState } from "react";
import { Link } from "react-router-dom";


export const Header = (props) => {

  
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpenR, setModalOpenR] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const toggleModalR = () => {
    setModalOpenR(!isModalOpenR);
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <Link to="/login"><a
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Login
                </a>
                </Link>{" "}
                <Link to="/register"><a
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Register
                </a>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};