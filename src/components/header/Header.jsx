import React from "react";
import ItemHeader from "../itemHeader/ItemHeader.jsx";
import Navbar from "../navbar/Navbar.jsx";
import "./stylesHeader.scss";

const Header = () => {
  return (
    <header>
      <Navbar />
      <ItemHeader />
    </header>
  );
};

export default Header;
