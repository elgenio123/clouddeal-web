import "../../../public/css/sign.css"
import React,{useState} from 'react';
import CloseIcon from '@mui/icons-material/Close'

function Login(props) {

  return (
    <div className={props.isModalOpen ? "model open" : "model"}>
      <div class="wrapper">
      <CloseIcon onClick ={() => props.setModalOpen(false)} className="close-icon"/>
        <div class="rec-prism">
          <div class="face face-front">
            <div class="content">
              <h2>Sign in</h2>
              <form onsubmit="event.preventDefault()">
                <div class="field-wrapper">
                  <input type="text" name="username" placeholder="username" />
                  <label>username</label>
                </div>
                <div class="field-wrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    autocomplete="new-password"
                  />
                  <label>password</label>
                </div>
                <div class="field-wrapper">
                  <input type="submit" onclick="showThankYou()" />
                </div>
                <span class="psw" onclick="showForgotPassword()">
                  Forgot Password?{" "}
                </span>
                <span class="signup" onclick="showSignup()">
                  Not a user? Sign up
                </span>
              </form>
            </div>
          </div>
          <div class="face face-bottom">
            <div class="content">
              <div class="thank-you-msg">Thank you!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;