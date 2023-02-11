import React from "react";
import "./stylesIconsFotter.scss";

const IconsFooter = () => {
  return (
    <div className="socialMedia2">
      {[...Array(4)].map((_, index) => (
        <div className={`iconMenu${index + 1}`} key={index}></div>
      ))}
    </div>
  );
};

export default IconsFooter;
