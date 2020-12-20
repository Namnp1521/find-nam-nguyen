import React, { useState } from "react";
import { connect } from "react-redux";
import Sketch from "./sketch-p5/index";
import Fade from "react-reveal/Fade";

import { SOCIALS, EMAIL_DATA } from "./constants";
import { FaAngleUp } from "react-icons/fa";

import "./contact.scss";

function Contact(props) {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLink = (link) => {
    window.open(link, "_blank");
  };

  const handleScollTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const handleSendEmail = () => {
    let toEmail = EMAIL_DATA.toEmail;
    let subject = "Contact from " + name;
    window.open(
      `mailto:${toEmail}?cc=${fromEmail}&subject=${subject}&body=${message}`,
      "_blank"
    );
  };

  return (
    <div className="contact" id="contact">
      <div className="flex-column" style={{ position: "relative" }}>
        <Sketch />
        <Fade right duration={1000} delay={500}>
          <div className="title color-white">CONTACT</div>
        </Fade>
        <Fade right duration={1000} delay={1000}>
          <div className="underline bg-white" />
        </Fade>
        <Fade bottom duration={1000} delay={1200}>
          <div className="content flex-column">
            <div className="email flex-column">
              <div className="question">
                Have a question or want to work together?
              </div>
              <form className="flex-column">
                <input
                  type="text"
                  placeholder="Name"
                  onBlur={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  onBlur={(e) => setFromEmail(e.target.value)}
                />
                <textarea
                  placeholder="Your message"
                  onBlur={(e) => setMessage(e.target.value)}
                />
                <div className="submit" onClick={handleSendEmail}>
                  SUBMIT
                </div>
              </form>
            </div>

            <div className="socials flex-column">
              <div className="up" onClick={handleScollTop}>
                <FaAngleUp />
              </div>
              <div className="flex-row">
                {SOCIALS.map((s, idx) => {
                  let Icon = s.icon;
                  return (
                    <div
                      key={idx}
                      className="social-item"
                      onClick={() => handleLink(s.link)}
                    >
                      <Icon className="icon" />
                    </div>
                  );
                })}
              </div>
              <div className="copyright">
                NAM NGUYEN
                <span>©2020</span>
              </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
