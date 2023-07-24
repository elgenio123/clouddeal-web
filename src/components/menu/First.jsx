import React from 'react'

 function First() {
    
  return (
    <div className="fluid-container" id="top">
      <div className="row">
        <div className="col-md-6 col-12">
          <ul className="d-flex header-contact">
            <li>
              <i className="fa fa-phone"></i>
              Tel:
              <a href="https://web.whatsapp.com/send?phone=237672044430">
                +237 672 044 430
              </a>
            </li>

            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:tegonguefolefackf@gmail.com">
                tegonguefolefackf@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-12">
          <ul className="d-flex account_login-area">
            <li>
              <a href="{{ route('auth.login') }}">Login/Register</a>
            </li>
            <li>
              <div className="publish">
                <a id="publish-button" href="">
                  Publish
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default First;