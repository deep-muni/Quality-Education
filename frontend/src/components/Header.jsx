import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-warning">
        <a className="navbar-brand" style={{ alignItems: "center" }}>
          <h4>Quality Education</h4>
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapse_target"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="collapse_target">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="nav-link text-dark">
                  <strong>HOME</strong>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="nav-link text-dark">
                  <strong>ABOUT US</strong>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="nav-link text-dark">
                  <strong>LOGIN</strong>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
