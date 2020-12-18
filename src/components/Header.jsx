import React from "react";

import LOGO from "../assets/images/logo-platzimaster_1.png";

const Header = () => {
  return (
    <header className="header-container">
      <figure className="header-logo">
        <img src={LOGO} alt="" />
      </figure>
      <div>
        <a href="">iniciar sesion</a>
      </div>
    </header>
  );
};

export default Header;
