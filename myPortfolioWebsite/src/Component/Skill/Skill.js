import React from "react";
import "./Skill.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function Skill() {
  AOS.init({
    offset: 100,
    duration: 1000,
  });
  return (
    <div className="skill" id="skillA">
      <h1>Skill</h1>
      <h6>What Skills I Have</h6>
      <div className="skill_container">
        <section className="frontend" data-aos="zoom-in">
          <h4>Frontend Development</h4>
          <div className="skill_content">
            <article className="skill_list">
              <BsFillPatchCheckFill />
              <div className="skill_detail">
                <h5>React Js</h5>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_list">
              <BsFillPatchCheckFill />
              <div className="skill_detail">
                <h5>JavaScript</h5>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_list">
              <BsFillPatchCheckFill />
              <div className="skill_detail">
                <h5>HTML</h5>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_list">
              <BsFillPatchCheckFill />
              <div className="skill_detail">
                <h5>CSS</h5>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_list">
              <BsFillPatchCheckFill />
              <div className="skill_detail">
                <h5>React Bootstrap</h5>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_list">
              <BsFillPatchCheckFill />
              <div className="skill_detail">
                <h5>SCSS</h5>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </section>
        <section className="backend" data-aos="zoom-in">
          <h4>Backend Development</h4>
          <div className="skill_content">
            <article className="skill_list">
              <BsFillPatchCheckFill />
              <div className="skill_detail">
                <h5>Java</h5>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill_list">
              <BsFillPatchCheckFill />
              <div className="skill_detail">
                <h5>MySQL</h5>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skill;
