import React, { useContext, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./../../../public/css/sign.css"
import { RegisterContext } from '../../contexts/registerContext';
import { Link } from 'react-router-dom';

function Register() {

  const [registerState, dispatch] = useContext(RegisterContext);
  const currentData = registerState.data[registerState.currentFieldIndex];

  return (
    <div className="wrapper">
      <div className="rec-prism">
        <div className="face face-front">
          <div className="content">
            <h2>Sign up</h2>
            <ArrowBackIosNewIcon
              onClick={() => {
                dispatch({ type: "BACK-BUTTON" });
              }}
              className="back-icon"
            />
            <form onSubmit={() => event.preventDefault()}>
              <div className="field-wrapper">
                <input
                  type={currentData.type[0]}
                  name={currentData.name[0]}
                  placeholder={currentData.name[0]}
                />
                <label>{currentData.name[0]}</label>
              </div>
              <div className="field-wrapper">
                <input
                  type={currentData.type[1]}
                  name={currentData.name[1]}
                  placeholder={currentData.name[1]}
                />
                <label>{currentData.name[1]}</label>
              </div>
              {registerState.currentFieldIndex !== 2 ? (
                <>
                  {registerState.currentFieldIndex == 0 ? (
                    <>
                      <div className="field-wrapper">
                        <input
                          type={currentData.type[2]}
                          name={currentData.name[2]}
                        />
                        <label>Male</label>
                      </div>
                      <div className="field-wrapper">
                        <input
                          type={currentData.type[2]}
                          name={currentData.name[2]}
                        />
                        <label>Female</label>
                      </div>
                    </>
                  ) : (
                    <div className="field-wrapper">
                      <input
                        type={currentData.type[2]}
                        name={currentData.name[2]}
                        placeholder={currentData.name[2]}
                      />
                      <label>{currentData.name[2]}</label>
                    </div>
                  )}
                </>
              ) : null}
              {registerState.currentFieldIndex == 1 ? (
                <>
                  <div className="field-wrapper">
                    <input
                      type={currentData.type[3]}
                      name={currentData.name[3]}
                      placeholder={currentData.name[3]}
                    />
                    <label>{currentData.name[3]}</label>
                  </div>
                </>
              ) : null}

              {!registerState.submitForm ? (
                <div className="field-wrapper">
                  <button
                    id="next-button"
                    onClick={() => {
                      dispatch({ type: "NEXT-BUTTON" });
                    }}
                  >
                    Next
                  </button>
                </div>
              ) : null}
              {registerState.submitForm ? (
                <div className="field-wrapper">
                  <input type="submit" />
                </div>
              ) : null}
              <Link to="/login">
                <span className="singin">Already a user? Sign in</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register