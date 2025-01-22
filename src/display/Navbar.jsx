import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mda from "../../src/assets/img/mda.png";
export default function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <div>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a
            href="#"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <h1 className="sitename">
              <img src={Mda} alt="" />
            </h1>
            <span>.</span>
          </a>
          <nav
            id="navmenu"
            className={`navmenu ${isMenuVisible ? "show" : ""}`}
          >
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <i
              className={`mobile-nav-toggle d-xl-none bi ${
                isMenuVisible ? "bi-x" : "bi-list"
              }`}
              onClick={toggleMenu}
            ></i>
          </nav>

          <a className="btn-getstarted" href="#contact">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
}
