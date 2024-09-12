import React from "react";
import "./About.css";
import about_image from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_image} alt="" className="about-image" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>

      <div className="about-right">
        <h3>About This Institution</h3>
        <h2>We Create The Leaders of Future</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minus
          quasi eius consequatur voluptas deserunt illo. Minus debitis, porro
          simi
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          facere! Fugit ullam quasi nemo. Quibusdam quo reprehenderit officia,
          voluptas officiis, numqua
        </p>
      </div>
    </div>
  );
};

export default About;
