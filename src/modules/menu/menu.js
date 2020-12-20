import React, { useState } from "react";
import { connect } from "react-redux";
import { FiMenu, FiChevronLeft } from "react-icons/fi";

import "./menu.scss";
import { MENU_LIST } from "./constants";

function Menu(props) {
  const [curPage, setCurPage] = useState(MENU_LIST[0].id);
  const [showMenu, setShowMenu] = useState(false);

  const handleClickMenu = (id) => {
    setCurPage(id);
    // TODO:
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="menu flex-row">
      <div className="icon-menu" onClick={handleShowMenu}>
        <FiMenu />
      </div>
      <div className={`ls-menu-wrap ${showMenu ? "show" : "hide"}`}>
        <div className={"mask"} onClick={handleCloseMenu}></div>
        <div className={"ls-menu flex-column"}>
          <div className="icon-close" onClick={handleCloseMenu}>
            <FiChevronLeft />
          </div>
          {MENU_LIST.map((menu) => (
            <span
              style={{ display: "block", margin: "20px 0" }}
              key={menu.id}
              onClick={() => {
                handleClickMenu(menu.id);
                handleCloseMenu();
              }}
              className={curPage === menu.id ? "hightlight" : ""}
            >
              {menu.name}
            </span>
          ))}
        </div>
      </div>
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
