import React from "react";
import "./home.scss";
import { connect } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import Sketch from "./sketch-p5";

function Home(props) {
  const handleClickView = () => {
    // TODO:
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home flex-column" id="home">
      <Sketch />
      <div className="text">
        Hello, I'm
        <span className="highlight"> Nam Nguyen</span>.<br />
        I'm a front-end web/mobile developer.
      </div>
      <div className="btn flex-row" onClick={handleClickView}>
        View my work
        <FiArrowRight className="icon" />
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
