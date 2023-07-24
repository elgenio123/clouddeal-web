import React from "react";
import sectionImage from "../../assets/images/section-title.png"
import categoryImg from '../../assets/images/featured/2.jpg'

function Categories() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>Categories</h2>
            <img src={{sectionImage}} alt="" />
          </div>
        </div>
        <div className="col-12">
          <div className="featured-active2 owl-carousel next-prev-style">
            <div className="featured-wrap">
              <div className="featured-img">
                <img src={{ categoryImg }} alt="" />
                <div className="featured-content">
                  <a
                    id="category-link"
                    href=""
                    style={{ textTransform: "capitalize" }}
                  >
                    Category
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
