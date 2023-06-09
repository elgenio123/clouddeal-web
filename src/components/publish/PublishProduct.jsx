import React, { useRef, useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom';

function PublishProduct() {

  const fileInputRef = useRef(null);

  const [upLoadText, setUpLoadText] = useState(["Upload 4 pictures"])

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setUpLoadText([])
    if (selectedFiles.length === 4) {
      Array.from(selectedFiles).forEach((file) => {
        setUpLoadText(upLoadText.push(file.name))
      });
   
      console.log(upLoadText)
     
    } else {
      setUpLoadText(['Please select exactly 4 pictures.']);
    }
  };

  return (
    <div className="signup-container">
      <div className="left-container">
        <h1>
          <i className="fas fa-paw"></i>
          PUBLISH PRODUCT
        </h1>
        <div className="puppy" style={{ display: "none" }}>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" />
        </div>
      </div>
      <div className="right-container">
        <header>
          <h1>Kindly Enter the details of your product </h1>
          <div className="set">
            <div className="pets-name">
              <label htmlFor="pets-name">Name</label>
              <input
                id="pets-name"
                placeholder="Product's name"
                type="text"
              ></input>
            </div>
            <div className="pets-photo">
              <button id="pets-upload" onClick={handleFileSelect}>
                <i className="fas fa-camera-retro">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    multiple
                  />
                </i>
              </button>
              <label htmlFor="pets-upload">{upLoadText}</label>
            </div>
          </div>
          <div className="set">
            <div className="pets-breed">
              <label htmlFor="pets-breed">Price</label>
              <input id="pets-breed" placeholder="Price" type="number"></input>
            </div>
            <div className="pets-birthday">
              <label htmlFor="pets-birthday">Category</label>
              <select className="category" placeholder="Category">
                <option>Dresses</option>
                <option>Shoes</option>
                <option>Books</option>
              </select>
            </div>
          </div>
          <div className="set">
            <div className="pets-gender">
              <label htmlFor="pet-gender-female">Will you like to boost?</label>
              <div className="radio-container">
                <input
                  id="pet-gender-female"
                  name="boost"
                  type="radio"
                  value="yes"
                ></input>
                <label htmlFor="pet-gender-female">YES</label>
                <input
                  id="pet-gender-male"
                  name="boost"
                  type="radio"
                  value="no"
                ></input>
                <label htmlFor="pet-gender-male">NO</label>
              </div>
            </div>
            <div className="pets-birthday">
              <label htmlFor="pets-birthday">Town</label>
              <select className="town" placeholder="Category">
                <option>Bafoussam</option>
                <option>Dschang</option>
                <option>Douala</option>
              </select>
            </div>
          </div>
          <div className="pets-weight">
            <label htmlFor="pet-weight-0-25" style={{ paddingLeft: "90px" }}>
              Descrition
            </label>
            <div className="description-container">
              <textarea name="description" className="des"></textarea>
            </div>
          </div>
        </header>
        <div className="foot">
          <div className="set">
            <button id="back">Back</button>
            <Link to="/payment">
              <button id="next">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublishProduct