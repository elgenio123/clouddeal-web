import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Second() {
  return (
    <>
      <div className="fluid-container">
        <div className="row">
          <div className="col-lg-3 col-md-7 col-sm-6 col-6">
            <div className="logo">
              <a href="">
                <img src={{logo}} alt="no image" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 d-none d-lg-block">
            <nav className="mainmenu">
              <ul className="d-flex">
                <li className="{{ Request::is('clouddeal') ? 'active' : '' }}">
                  <Link to="/"><a href="">Home</a></Link>
                </li>
                <li className="{{ Request::is('clouddeal/allAds') ? 'active' : '' }}">
                  <Link to="/best-ads"><a href="">Best Ads</a></Link>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    Categories <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown_style">
                    <li>
                      <a id="category" href="{{ route('dashboard.index') }}">
                        Categories
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="{{ Request::is('clouddeal/about') ? 'active' : '' }}">
                  <Link to="/about"><a href="">About</a></Link>
                </li>
                <li className="{{ Request::is('clouddeal/contact') ? 'active' : '' }}">
                <Link to="/contact"><a href="">Contact</a></Link>
                </li>
                <li className="search-tigger">
                  <a href="javascript:void(0);">
                    <i className="flaticon-search"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="col-md-1 col-sm-3 col-7 d-block d-lg-none"
            style={{ position:'absolute', right:'0' }}
          >
            <div className="responsive-menu-tigger">
              <a href="javascript:void(0);">
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="responsive-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-12 d-block d-lg-none">
              <ul className="metismenu">
                <li className="sidemenu-items active">
                  <Link to='/'><a aria-expanded="false" href="">
                    Home
                  </a></Link>
                </li>
                <li className="sidemenu-items {{ Request::is('dashboard') ? 'active' : '' }}">
                  <Link to='/best-Ads'><a
                    aria-expanded="false"
                    href=""
                  >
                    Best Ads
                  </a></Link>
                </li>
                <li className="sidemenu-items">
                  <a
                    className="has-arrow"
                    aria-expanded="false"
                    href="javascript:void(0);"
                  >
                    Categories
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="">Categories</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/about'>
                  <a href="{{ route('about') }}">About</a>
                  </Link>
                </li>
                <li>
                  <Link to='/contact'><a href="{{ route('contact') }}">Contact</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;
