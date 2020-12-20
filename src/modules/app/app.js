import React from "react";
import "./app.scss";
import { connect } from "react-redux";
import Home from "../home/home";
import About from "../about/about";
import Project from "../project/project";
import Blog from "../blog/blog";
import Contact from "../contact/contact";
import Menu from "../menu/menu";

function App(props) {
  return (
    <div className="root-app">
      <Home />
      <Menu />
      <About />
      <Project />
      <Blog />
      <Contact />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
