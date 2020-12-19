import React from "react";

import LOGO from "../assets/images/logo-platzimaster_1.png";

const Header = () => {
  return (
    <header className="header-container">
      <figure className="header-logo">
        <a href="/">
        <img src={LOGO} alt="" />
        </a>
      </figure>
      <div className="sesion">
        <a className="sesion__button" href="/login">iniciar sesion</a>
      </div>
    </header>
  );
};

export default Header;
