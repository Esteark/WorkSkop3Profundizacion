import React from "react";
import { arraymenu } from "../menuList/menuList";

import "./stylesMenuFooter.scss";

const MenuListFooter = ({ menuFooter }) => {
  return (
    <ul className={`ul__footer ${menuFooter ? "ul__show" : ""}`}>
      {arraymenu.map((element, index) => (
        <li key={index}>{element.item}</li>
      ))}
    </ul>
  );
};

export default MenuListFooter;
