import { React, useState } from "react";
import Logo from "../logo/Logo.jsx";
import MenuList from "../menuList/Menulist.jsx";
import IconMenu from "../iconMenu/IconMenu.jsx";
import "./stylesNav.scss";
import MenuListFooter from "../menuListFooter/MenuListFooter.jsx";

const Navbar = () => {
  const [iconMenu, setIconMenu] = useState(false);

  const handleClicMenu = (e) => {
    if (iconMenu == false) {
      setIconMenu(true);
    } else {
      setIconMenu(false);
    }
    console.log(iconMenu);
  };
  return (
    <nav className="nav">
      <Logo />
      <MenuList statusMenu={iconMenu} />
      <MenuListFooter />
      <IconMenu onclick={handleClicMenu} status={iconMenu} />
    </nav>
  );
};

export default Navbar;
