import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

// We are going to create slider in testimonials
const Testimonials = () => {
  const slideForward = () => {};

  const slidebackward = () => {};

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slidebackward}
      />

      {/* Now creating Slider */}

      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div className="name-title">
                  <h3>Name 1</h3>
                  <span>Title and Company</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                nesciunt libero! Incidunt est obcaecati quod impedit dolorem
                numquam rerum voluptas et fuga ullam.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div className="name-title">
                  <h3>Name 2</h3>
                  <span>Title and Company</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                nesciunt libero! Incidunt est obcaecati quod impedit dolorem
                numquam rerum voluptas et fuga ullam.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div className="name-title">
                  <h3>Name 3</h3>
                  <span>Title and Company</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                nesciunt libero! Incidunt est obcaecati quod impedit dolorem
                numquam rerum voluptas et fuga ullam.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div className="name-title">
                  <h3>Name 4</h3>
                  <span>Title and Company</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                nesciunt libero! Incidunt est obcaecati quod impedit dolorem
                numquam rerum voluptas et fuga ullam.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
