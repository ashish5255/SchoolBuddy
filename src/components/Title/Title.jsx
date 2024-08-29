import React from "react";
import "./Title.css";
const Title = ({ title1, title2 }) => {
  return (
    <div className="title">
      <p>{title1}</p>
      <h2>{title2}</h2>
    </div>
  );
};

export default Title;
