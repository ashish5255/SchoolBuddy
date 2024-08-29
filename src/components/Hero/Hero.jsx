import React from "react";
import "./hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Igniting Minds, Shaping Futures</h1>
        <p>
          We harness cutting-edge technology to transform education. Our
          interactive learning environments integrate the latest tools and
          digital resources, engaging students in hands-on experiences that
          bring lessons to life and prepare them for the future.{" "}
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="Explore" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
