import React from "react";

const HeroFocus = (props) => {
  return (
    <div className="hero-image">
      <img src={props.focusImage} alt="" />
    </div>
  );
};

export default HeroFocus;
