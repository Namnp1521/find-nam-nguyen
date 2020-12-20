import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import "./about.scss";
import avatar from "../../shared/assets/images/avatar.jpg";
import { SKILLS } from "./constants";

function About(props) {
  const handleToConact = () => {
    // TODO:
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="about container flex-column" id="about">
      <Fade left duration={1000} delay={500}>
        <div className="title">ABOUT</div>
      </Fade>
      <Fade left duration={1000} delay={1000}>
        <div className="underline" />
      </Fade>
      <div className="content flex-column">
        <Fade left duration={1000} delay={1300}>
          <div className="avatar flex-column">
            <div className="cover-avatar">
              <img src={avatar} />
            </div>
            <div className="avatar-detail">
              <div className="question">Who's this guy?</div>
              I'm a Front-End Developer for{" "}
              <a href="https://www.luvina.net/" target="_blank">
                Luvina JSC
              </a>{" "}
              in Hanoi, VN.
              <br />
              I have serious passion for UI effects, animations and creating
              intuitive, dynamic user experiences.
              <br />
              <a onClick={handleToConact}>Let's make something special.</a>
            </div>
          </div>
        </Fade>
        <Fade right duration={1000} delay={1300}>
          <div className="skill flex-column">
            {SKILLS.map((skill, idx) => (
              <div className="skill-element" key={skill.name + idx}>
                <div className="name">
                  <span>{skill.name}</span>
                  <span>{skill.percent}</span>
                </div>
                <div className="bar">
                  <Fade right duration={1500} delay={1500}>
                    <div
                      className="bar-percent"
                      style={{
                        width: skill.percent,
                      }}
                    ></div>
                  </Fade>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
