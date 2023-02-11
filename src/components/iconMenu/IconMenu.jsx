import React from "react";
import "./stylesIconMenu.scss";

const IconMenu = ({ onclick, status }) => {
  return (
    <div onClick={onclick} className={status ? "closeIcon" : "hamburger"}></div>
  );
};

export default IconMenu;
