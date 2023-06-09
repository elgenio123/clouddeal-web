import React, { useContext, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./../../../public/css/sign.css"
import { RegisterContext } from '../../contexts/registerContext';
import { Link } from 'react-router-dom';
import Animate from '../animate/Animate';

function Register() {

  const [registerState, dispatch] = useContext(RegisterContext);
  const currentData = registerState.data[registerState.currentFieldIndex];

  return (
    <>
      <Animate />
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
                        <div className="pets-gender" style={{marginTop:"20px"}}>
                          <label className='gender'>Gender</label>
                          <div className="radio-container">
                            <input
                              id="pet-gender-female"
                              name="pet-gender"
                              type="radio"
                              value="female"
                            ></input>
                            <label htmlFor="pet-gender-female">Female</label>
                            <input
                              id="pet-gender-male"
                              name="pet-gender"
                              type="radio"
                              value="male"
                            ></input>
                            <label htmlFor="pet-gender-male">Male</label>
                          </div>
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
    </>
  );
}

export default Register