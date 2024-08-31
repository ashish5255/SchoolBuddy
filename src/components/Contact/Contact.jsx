import React from "react";
import "./Contact.css";
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import address_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  // the following script is added from web3 forms
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "22375032-f055-4474-ae2c-f6f41b6bd645");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  //end of web3

  return (
    <div className="Contact">
      {/* Creating 2 columns, first for contact details and second for form */}
      <div className="contact-col">
        <h3>
          Send us a message <img src={message_icon} alt="" />
        </h3>
        <p>
          Feel free to share your thoughts. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Eius autem aliquid soluta fuga. Minima
          amet placeat tenetur iste labore ducimus animi unde, rem enim, quo
          accusantium vero omnis quis et.
        </p>
        <ul>
          <li>
            <img src={phone_icon} alt="" />
            Phone Number
          </li>
          <li>
            <img src={mail_icon} alt="" />
            Email@email.com
          </li>
          <li>
            <img src={address_icon} alt="" />
            Address
          </li>
        </ul>
      </div>

      {/* React Form */}
      <div className="contact-col">
        <form onSubmit={onSubmit} action="">
          <label htmlFor=""> Your Name</label>
          <input type="text" name="name" placeholder="Enter your name:" />
          <label htmlFor="">Phone Number</label>
          <input type="text" name="phone" placeholder="Contact Number" />
          <label htmlFor="">Write your message here:</label>
          <textarea
            name="message"
            id=""
            rows="10"
            cols="30"
            placeholder="Any message you want to leave"
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
