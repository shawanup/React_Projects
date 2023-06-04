import React from "react";
import "./Home.css";
import myPhoto from "../Assests/anup1.png";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import CV from "../Assests/CV.pdf";


function Home() {
  const developer='Frontend Developer';
  let index=1;
  const typeWriter=()=>{
    document.querySelector('.profession').innerText=developer.slice(0,index);
    index>developer.length?index=1:index++
  }

  setInterval(()=>{
    typeWriter();
  },100)
  return (
    <div className="home" id="homeA">
      <div className="home_detail">
        <div className="home_left">
          <h1>
            Hi I'm <span>Anup Shaw</span>
          </h1>
          <h3 className="profession"></h3>
          <section className="social">
            <a href="https://github.com/shawanup/React_Projects" target="blank">
              <AiFillGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/anup-shaw-60b20b207/"
              target="blank"
            >
              <BsLinkedin className="icon" />
            </a>
            <a
              href="https://www.facebook.com/aditya.shaw.9440?mibextid=ZbWKwL"
              target="blank"
            >
              <BsFacebook className="icon" />
            </a>
          </section>
          <section className="cv_download">
            <a href={CV} download>
              <button className="btn ">Download CV</button>
            </a>
          </section>
        </div>
        <div className="home_right">
          <img src={myPhoto}></img>
          <div className="liquid-shape">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="back_img">
              <path
                fill="#12f7ff"
                d="M36.6,-40.3C50.2,-32.3,65.7,-23.3,73.1,-8.9C80.4,5.5,79.4,25.4,70.7,41.1C62,56.8,45.5,68.2,28.2,72.3C10.9,76.4,-7.2,73.1,-23.7,66.5C-40.1,59.9,-54.9,50,-63.2,36.2C-71.5,22.4,-73.3,4.6,-70.8,-12.9C-68.2,-30.4,-61.2,-47.5,-48.7,-55.8C-36.2,-64,-18.1,-63.3,-3.3,-59.4C11.5,-55.5,23.1,-48.4,36.6,-40.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
