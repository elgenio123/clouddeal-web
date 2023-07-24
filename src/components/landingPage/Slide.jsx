import React from "react";

function Slide() {
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slide-inner slide-inner7">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-lg-9 col-12">
                  <div className="slider-content">
                    <div className="slider-shape">
                      <h2 data-swiper-parallax="-500">LET'S MAKE A DEAL</h2>
                      <p data-swiper-parallax="-400">
                        Be curious, get started, and trust us for your various
                        sales and your various online purchases
                      </p>
                      <a href="#products" data-swiper-parallax="-300">
                        Deal Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide overlay">
          <div className="single-slider slide-inner slide-inner1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-lg-9 col-12">
                  <div className="slider-content">
                    <div className="slider-shape">
                      <h2 data-swiper-parallax="-500">
                        CONNECT WITH YOUR CLIENTS
                      </h2>
                      <p data-swiper-parallax="-400">
                        A business is a relationship. We want to build
                        relationships with businesses like yours.Let's talk
                      </p>
                      <a href="#products" data-swiper-parallax="-300">
                        Deal Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slide-inner slide-inner8">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-lg-9 col-12">
                  <div className="slider-content">
                    <div className="slider-shape">
                      <h2 data-swiper-parallax="-500">
                        FIND US FROM YOUR PHONE OR COMPUTER
                      </h2>
                      <p data-swiper-parallax="-400">
                        From your phone or your computer, you can find us and
                        we'll talk business
                      </p>
                      <a href="#products" data-swiper-parallax="-300">
                        Deal Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default Slide;
