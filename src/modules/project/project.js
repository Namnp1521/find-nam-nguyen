import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "./modal/modal";
import Fade from "react-reveal/Fade";

import "./project.scss";
import { PROJECTS } from "./constants";

function Project(props) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(PROJECTS[0]);

  const handleSeeMore = (idx) => {
    setData(PROJECTS[idx]);
    setShowModal(true);
  };

  return (
    <div className="project" id="project">
      <div className="container flex-column" id="project">
        <Fade right duration={1000} delay={500}>
          <div className="title">PROJECT</div>
        </Fade>
        <Fade right duration={1000} delay={1000}>
          <div className="underline" />
        </Fade>
        <div className="content flex-row">
          {PROJECTS.map((pro, idx) => (
            <Fade
              bottom
              duration={1000}
              delay={1300 + idx * 100}
              key={pro.name + idx}
            >
              <div className="project-item">
                <img className="transition" src={pro.main} />
                <div className="project-detail transition">
                  <div className="project-name">{pro.name}</div>
                  <div className="project-tech">{pro.tech}</div>
                </div>
                <div
                  className="btn-more transition"
                  onClick={() => handleSeeMore(idx)}
                >
                  SEE MORE
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <Modal show={showModal} setShow={setShowModal} data={data} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Project);
