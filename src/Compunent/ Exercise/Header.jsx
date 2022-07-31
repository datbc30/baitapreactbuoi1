import React, { Component } from "react";
import "../asssets/style/style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>Start Bootstrap</h1>
            </div>
            <nav className="navbar">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
