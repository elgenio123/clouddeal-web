import React from 'react'
import "./../../../public/css/sign.css"

function Forgotpass() {
  return (
    <div className="wrapper">
      <div className="rec-prism">
        <div className="face face-front">
          <div className="content">
            <h2>Forgot your password?</h2>
            <small>
              Enter your email so we can send you a reset link for your password
            </small>
            <form onSubmit={() => event.preventDefault()}>
              <div className="field-wrapper">
                <input type="text" name="email" placeholder="email" />
                <label>e-mail</label>
              </div>
              <div className="field-wrapper">
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpass