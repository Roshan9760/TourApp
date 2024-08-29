import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import chatLogo from "../assets/chatLogo.jpg";
import SearchButton from "./SearchButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Travexia Logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/page">Page</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-contact">
        <div className="chatimg">
          <img src={chatLogo} alt="Chat" />
        </div>
        <div className="contact-info">
          <span>Need help?</span>
          <span>(307) 555-0133</span>
        </div>
        <SearchButton text="Book Now"></SearchButton>
      </div>
    </div>
  );
};

export default Navbar;
