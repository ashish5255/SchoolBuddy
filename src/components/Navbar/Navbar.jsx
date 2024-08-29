import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <nav className="container">
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li>
            {" "}
            <button className="btn">Contact Us!!</button>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
