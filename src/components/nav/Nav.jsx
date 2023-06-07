import React, { Component } from "react";
import "./nav.css";
import logo from "./../../assets/images/logo.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav1">
        <div className="nav__blocks">
          <img src={logo}></img>
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    );
  }
}
