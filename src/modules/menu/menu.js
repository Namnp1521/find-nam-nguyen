import React, { useState } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import "./menu.scss";
import { MENU_LIST } from "./constants";

function Menu(props) {
  const [curPage, setCurPage] = useState(MENU_LIST[0].id);

  const handleClickMenu = (id) => {
    setCurPage(id);
    // TODO:
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="menu flex-row">
      {MENU_LIST.map((menu) => (
        <span
          key={menu.id}
          onClick={() => handleClickMenu(menu.id)}
          className={curPage === menu.id ? "hightlight" : ""}
        >
          {menu.name}
        </span>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
