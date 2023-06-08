import React, { useEffect } from 'react'
import "./payment.css"
import Link from 'antd/es/typography/Link';

function Payment() {

  const appendScript = (scriptToAppend) => {
   
}

useEffect(()=> {
  const script = document.createElement("script");
  script.src = "/src/assets/js/payment.js";
  script.async = true;
  document.body.appendChild(script);
})
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="modal__featured">
            <button type="button" className="button--transparent button--close">
              <svg
                className="nc-icon glyph"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
              >
                <g>
                  <path
                    fill="#ffffff"
                    d="M1.293,15.293L11,5.586L12.414,7l-8,8H31v2H4.414l8,8L11,26.414l-9.707-9.707 C0.902,16.316,0.902,15.684,1.293,15.293z"
                  ></path>{" "}
                </g>
              </svg>
              <span className="visuallyhidden">Return to Product Page</span>
            </button>
            <div className="modal__circle"></div>
            <img
              src="https://cloud.githubusercontent.com/assets/3484527/19622568/9c972d44-987a-11e6-9dcc-93d496ef408f.png"
              className="modal__product"
            />
          </div>
          <div className="modal__content">
            <h2>Your payment details</h2>

            <form onSubmit={()=>event.preventDefault()}>
              <ul className="form-list">
                <li className="form-list__row">
                  <label>Name</label>
                  <input type="text" name="" required="" />
                </li>
                <li className="form-list__row">
                  <label>MobileMoney Number</label>
                  <div id="input--cc" className="creditcard-icon">
                    <input type="text" name="cc_number" required="" />
                  </div>
                </li>
                <li className="form-list__row form-list__row--agree">
                  <input type="checkbox" name="save_cc" id="save-my-card" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label htmlFor="save-my-card" className="save-my-card">
                    Save my card for future purchases
                  </label>
                </li>
                <li>
                  <Link to="/dashboard">
                    <button type='submit' className="button">
                      Pay Now
                    </button>
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Payment