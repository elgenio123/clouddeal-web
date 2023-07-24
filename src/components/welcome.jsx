import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Slide from "./landingPage/Slide";
import Categories from "./landingPage/Categories";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Welcome = () => {
  return (
    <div>
      <div className="slider-area">
        <Slide />
      </div>
      <div className="featured-area featured-area2">
        <Categories />
      </div>
    </div>
  );
};

export default Welcome;
