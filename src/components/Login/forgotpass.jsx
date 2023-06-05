import React from 'react'
import "./../../../public/css/sign.css"

function Forgotpass() {
  return (
    <div class="face face-back">
    <div class="content">
      <h2>Forgot your password?</h2>
      <small>
        Enter your email so we can send you a reset link for your
        password
      </small>
      <form onsubmit="event.preventDefault()">
        <div class="field-wrapper">
          <input type="text" name="email" placeholder="email" />
          <label>e-mail</label>
        </div>
        <div class="field-wrapper">
          <input type="submit" onclick="showThankYou()" />
        </div>
      </form>
    </div>
  </div>
  )
}

export default Forgotpass