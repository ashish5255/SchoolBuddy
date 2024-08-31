import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title title1="Our Programs" title2="What We Offer?" />
        <Programs />
      </div>

      {/* Moving on to the gallery, reusing the title created earlier */}
      <About />
      <Title title1="Gallery" title2="Campus Photos" />
      <Campus />

      <Title title1="Testimonials" title2="Words From Our Students" />
      <Testimonials />

      <Title title1="Want to know more?" title2="Definitely Contact Us" />
      <Contact />
    </div>
  );
};

export default App;
