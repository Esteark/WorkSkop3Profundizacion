import React from "react";
import IconsFooter from "../iconsFooter/IconsFooter";
import Logo from "../logo/Logo.jsx";
import MenuListFooter from "../menuListFooter/MenuListFooter";
import "./stylesFooter.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footerdiv1">
        <Logo />
        <div class="socialMedia1">
          <IconsFooter />
        </div>
        <MenuListFooter menuFooter={true} />
      </div>
      <div className="footerdiv2">
        <div class="socialMedia2">
          <IconsFooter />
        </div>

        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
