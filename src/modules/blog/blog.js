import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import "./blog.scss";

function Blog(props) {
  return (
    <div className="blog container flex-column" id="blog">
      <Fade left duration={1000} delay={500}>
        <div className="title">BLOG</div>
      </Fade>
      <Fade left duration={1000} delay={1000}>
        <div className="underline" />
      </Fade>
      <div className="content flex-row"></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
