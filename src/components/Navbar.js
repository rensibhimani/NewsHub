import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">News</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Country
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/India">India</Link></li>
                      <li><Link className="dropdown-item" to="/Germany">Germany</Link></li>
                      <li><Link className="dropdown-item" to="/United_Kingdom">United Kingdom</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">General</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Technology">Technology</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Science">Science</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Sports">Sports</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Health">Health</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
