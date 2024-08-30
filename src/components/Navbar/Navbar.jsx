import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  // When scrolled by 50px, the sticky variable is changed into true
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div>
      {/* when sticky is true, the dark-nav is applied into navbar */}
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
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
