import React, { useState } from "react";
import Login from "../login/login";
import Register from "../register/register";
import { RegisterProvider } from "../../contexts/registerContext";


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
                <a
                  onClick={toggleModal}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Login
                </a>{" "}
                <a
                  onClick={toggleModalR}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Register
                </a>{" "}
                <Login isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
                <RegisterProvider>
                  <Register
                    isModalOpenR={isModalOpenR}
                    setModalOpenR={setModalOpenR}
                  />
                </RegisterProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
