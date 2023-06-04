import React, { useState } from "react";
import "./About.css";
import pic from "../Assests/anup_about.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  AOS.init({
    offset: 200,
    duration: 1000,
  });
  return (
    <div className="about" id="aboutA">
      <h1>
        About <span>Me</span>
      </h1>
      <div className="about_details">
        <div className="left">
          <img src={pic}></img>
        </div>
        <div className="right">
          <p>
            I am an experienced software developer. My passion lies in front-end
            development, particularly in React and its related technologies. I
            have hands-on experience in building dynamic and interactive user
            interfaces using React. In addition to React, I am well-versed in
            various web technologies such as JavaScript,HTML, CSS, and
            Bootstrap. I have a solid understanding of software development
            principles and best practices, ensuring that my code is
            maintainable, scalable, and efficient.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
