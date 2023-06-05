import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./../../../public/css/sign.css"
import { RegisterContext } from '../../contexts/registerContext';

function Register(props) {

  const [registerState, dispatch] = useContext(RegisterContext);
  const currentData = registerState.data[registerState.currentFieldIndex];

  return (
    <div className={props.isModalOpenR ? "model open" : "model"}>
      <div class="face face-front">
        <div class="content">
          <h2>Sign up</h2>
          <ArrowBackIosNewIcon
            onClick={() => {
              dispatch({ type: "BACK-BUTTON" });
            }}
            className="back-icon"
          />
          <CloseIcon
            onClick={() => {
              props.setModalOpenR(false);
              dispatch({ type: "CLOSE-BUTTON" });
            }}
            className="close-icon"
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
            {registerState.currentFieldIndex == 0 ? (
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
            {registerState.currentFieldIndex == 0 ? (
              <>
                <div className="field-wrapper">
                  <input
                    type={currentData.type[3]}
                    name={currentData.name[3]}
                    placeholder={currentData.name[3]}
                  />
                  <label>{currentData.name[3]}</label>
                </div>
                <div className="field-wrapper">
                  <input
                    type={currentData.type[4]}
                    name={currentData.name[4]}
                    placeholder={currentData.name[4]}
                  />
                  <label>{currentData.name[4]}</label>
                </div>
              </>
            ) : null}

            {!registerState.submitForm ? (
              <div class="field-wrapper">
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
              <div class="field-wrapper">
                <input type="submit" />
              </div>
            ) : null}
            <span class="singin" onClick="showLogin()">
              Already a user? Sign in
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register