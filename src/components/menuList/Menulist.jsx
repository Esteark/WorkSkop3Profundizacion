import React from "react";
import { arraymenu } from "./menuList";
import "./stylesmenuList.scss";

const MenuList = ({ statusMenu }) => {
  const hideAnimation = () => {
    let animation = "slide-out-right";
    setTimeout(() => {
      animation += " ul__menu__desactivate";
    }, 100);
    return animation;
  };

  // MediaQueryMessage();

  return (
    <ul
      id="ul"
      className={` ul__menu ${
        statusMenu ? "ul__menu__active slide-in-right" : hideAnimation()
      } `}
    >
      {arraymenu.map((element, index) => (
        <li key={index}>{element.item}</li>
      ))}
    </ul>
  );
};

export default MenuList;
