import "../../../public/css/sign.css"
import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Animate from "../animate/Animate";

function Login() {

  return (
    <>
    <Animate/>
    <div className="wrapper">
      <div className="rec-prism">
        <div className="face face-front">
          <div className="content">
            <h2>Sign in</h2>
            <form onSubmit={() => event.preventDefault()}>
              <div className="field-wrapper">
                <input type="text" name="username" placeholder="username" />
                <label>username</label>
              </div>
              <div className="field-wrapper">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  autoComplete="new-password"
                />
                <label>password</label>
              </div>
              <Link to="/dashboard">
              <div className="field-wrapper">
                <input type="submit" />
              </div>
              </Link>
              <Link to="/forgot-password">
                <span className="psw">Forgot Password? </span>
              </Link>
              <Link to="/register">
                <span className="signup">Not a user? Sign up</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;