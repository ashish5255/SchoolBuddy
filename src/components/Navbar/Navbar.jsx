import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  // When scrolled by 50px, the sticky variable is changed into true
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [toggle, setToggle] = useState(false);

  const toggle_menu = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      {/* when sticky is true, the dark-nav is applied into navbar */}
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        {/* <img className="logo" src={logo} alt="logo" /> */}
        {/* replacing the above image with h1 */}
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <h1 className="logo">Schoolbuddy</h1>
        </Link>

        <ul className={toggle ? "" : "hide-menu"}>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-155} duration={500}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-255} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-500} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-400} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              smooth={true}
              offset={-370}
              duration={500}
              className="btn"
            >
              Contact Us!!
            </Link>
          </li>
        </ul>

        <img
          onClick={toggle_menu}
          className=" menu-icon"
          src={menu_icon}
          alt=""
        />
      </nav>
    </div>
  );
};

export default Navbar;
